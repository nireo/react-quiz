import React, {useState} from "react"
import QuestionTable from "./QuestionTable"

const Question = (props) => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [questionsRight, setQuestionsRight] = useState([])
    const [questionsWrong, setQuestionsWrong] = useState([])
    
    // to clean code up a bit
    const questions = props.questions

    const handleTrue = () => {
        if (questions[questionNumber].correct_answer === "True") {
            console.log("your answer was correct")
            setScore(score + 1)
        } else {
            console.log("your answer is incorrect")
        }
    }   

    const handleFalse = () => {
        if (questions[questionNumber].correct_answer === "False") {
            console.log("your answer was correct")
            setScore(score + 1)
        } else {
            console.log("your answer is incorrect")
            setQuestionsWrong(
                questionsWrong.concat(
                    [[questionNumber, questions[questionNumber].question,
                    "True", "False"]]
                ))
        }
    }

    console.log(questionsRight)
    console.log(questionsWrong)

    // display ending page
    if (questionNumber === 10) { 
        return (
            <div className="jumbotron">
                <h2>The game has ended</h2>
                <hr></hr>
                <p>You scored {score} points, which means you got {score / 10 * 100}% correct.</p>
                <div>
                    <a 
                        target="_blank" rel="noopener noreferrer" 
                        href="https://github.com/nireo/react-quiz">
                        Github
                    </a>
                </div>
                <button className="btn btn-primary"></button>
                <div>   
                    <h3>Correct answers</h3>
                    <QuestionTable questionList={questionsRight} />
                </div>
                <div>
                    <h3>Wrong answers</h3>
                    <QuestionTable questionList={questionsWrong} />
                </div>

            </div>
        )
    }

    return (
    <div>
       <h3>{questions[questionNumber].question} </h3> 
       <div>
            <button onClick={() => {handleTrue(); setQuestionNumber(questionNumber + 1) }} className="btn btn-primary">True</button>
            <button onClick={() => {handleFalse(); setQuestionNumber(questionNumber + 1) }} className="btn btn-danger">False</button>
        </div>
       <div>Score: {score}/10</div>
    </div>)
}


export default Question