import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Question from "./components/Question"

function App() {
	const [ questions, setQuestions ] = useState([])
	const [ gameOn, setGameOn ] = useState(false)

	const hook = () => {
		axios
			.get('https://opentdb.com/api.php?amount=10')
			.then(response => {
				// since the api response in an object turns object in to a simpler array for useState
				const objectArray = Object.values(response.data)
				// since get returns results_status and results [1] includes all the question data
				setQuestions(objectArray[1])
			})
	}

	useEffect(hook, [])

	const displayAll = questions.map(question => <Question question={question}/>)
//	const allQuestions = questions.results.map(question => <li>{question.category} {question.question} {question.correct_answer} {question.difficulty}</li>)

	if (gameOn) {
		return (
			<div>
				The game has started
				<ul>
					{displayAll}
				</ul>
				<button className="btn btn-dark" onClick={() => setGameOn(false)}>go back</button>
			</div>
		)
	}

	// render starting page
  	return (
	<div class="jumbotron">
		<h1>React Trivia App</h1> <button className="btn btn-dark" onClick={() => setGameOn(true)}>start game</button>
	</div> )
}

export default App;
