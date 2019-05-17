import React, {useState} from "react"
import QuestionTable from "./QuestionTable"
import Success from "./Success";

const Question = (props) => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [questionsRight, setQuestionsRight] = useState([])
    const [questionsWrong, setQuestionsWrong] = useState([])
    const [successMessage, setSuccessMessage] = useState(null)
    
    // to clean code up a bit
    const questions = props.questions

    const handleTrue = () => {
        if (questions[questionNumber].correct_answer === "True") {
            setScore(score + 1)
            setQuestionsRight(questionsRight.concat({
                number: questionNumber,
                question: questions[questionNumber].question,
                yourAnswer: "True",
                correctAnswer: "True"
            }))

        } else {
            setQuestionsWrong(questionsWrong.concat({
                number: questionNumber,
                question: questions[questionNumber].question,
                yourAnswer: "True",
                correctAnswer: "False"
            }))
        }
    }   

    const handleFalse = () => {
        if (questions[questionNumber].correct_answer === "False") {
            setScore(score + 1)
            setQuestionsRight(questionsRight.concat({
                number: questionNumber,
                question: questions[questionNumber].question,
                yourAnswer: "False",
                correctAnswer: "False"
            }))
        } else {
            setQuestionsWrong(questionsWrong.concat({
                number: questionNumber,
                question: questions[questionNumber].question,
                yourAnswer: "False",
                correctAnswer: "True"
            }))
        }
    }

    // display ending page
    if (questionNumber === 10) {
        setSuccessMessage("Congratulations on completing the game")
        setTimeout(() => {
            setSuccessMessage(null)
        }, 5000)
        return (
            <div className="jumbotron">
                <Success message={successMessage} />
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
                <hr></hr>
                <div>   
                    <h3>Correct answers</h3>
                    <QuestionTable questionList={questionsRight} />
                </div>
                <hr></hr>
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