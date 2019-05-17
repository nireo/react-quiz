import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Question from "./components/Question"
import Multiple from "./components/Multiple"

function App() {
	const [ questions, setQuestions ] = useState([])
	const [ gameOn, setGameOn ] = useState(false)
	const [ multiple, setMultiple ] = useState(false)
	const [ questionType, setQuestionType ] = useState('') 

	// hook function that gets the needed info
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

	if (multiple) {
		return (
			<div className="jumbotron">
				<Multiple questions={questions} />
			</div>
		) 
	}

	// render starting page
  	return (
	<div className="jumbotron">
		<h1>React Trivia App</h1>
		<button className="btn btn-dark" onClick={() => {setGameOn(true); setQuestionType('boolean')}}>Play True / false</button><button className="btn btn-primary" onClick={() => {setMultiple(true); setQuestionType('multiple')}}>Play Multiple choice</button>
		<hr></hr>
		<div>
			<a 
				href="https://github.com/nireo/react-quiz" 
				target="_blank" rel="noopener noreferrer">
				Github
			</a>
		</div>
	</div> )
}

export default App;