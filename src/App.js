import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Question from "./components/Question"

function App() {
	const [ questions, setQuestions ] = useState([])
	const [ gameOn, setGameOn ] = useState(false)

	const hook = () => {
		axios
			.get(`https://opentdb.com/api.php?amount=10&type=boolean`)
			.then(response => {
				// since the api response in an object turns object in to a simpler array for useState
				const objectArray = Object.values(response.data)

				// since get returns results_status and results [1] includes all the question data
				setQuestions(objectArray[1])
			})

	}

	// execute the api request
	useEffect(hook, [])

	// displays a different site to users, if they started the game
	if (gameOn) {
		return (
			<div className="jumbotron">
				<Question questions={questions} />
			</div>
		)
	}

	// render starting page
  	return (
	<div className="jumbotron">
		<h1>React Trivia App</h1> <button className="btn btn-dark" onClick={() => setGameOn(true)}>Start game</button>
		<hr></hr>
		<div><a href="https://github.com/nireo/react-quiz">Github</a></div>
	</div> )
}

export default App;
