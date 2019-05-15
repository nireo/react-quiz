import React, {useState} from "react"

const Question = (props) => {
    const [questionNumber, setQuestionNumber] = useState(Number(0))
    const [score, setScore] = useState(0)

    if (questionNumber === undefined) {
        setQuestionNumber(Number(0))
    }

    console.log(questionNumber)
    console.log(props.questions[questionNumber].correct_answer)

    const handleTrue = () => {
        if (props.questions[questionNumber].correct_answer === "True") {
            console.log("your answer was correct")
            setScore(score + 1)
        } else {
            console.log("your answer is incorrect")
        }
    }   

    const handleFalse = () => {
        if (props.questions[questionNumber].correct_answer === "False") {
            console.log("your answer was correct")
            setScore(score + 1)
        } else {
            console.log("your answer is incorrect")
        }
    }

    return (
    <div>
       <h3>{props.questions[questionNumber].question}</h3> 
       <div>
            <button onClick={() => {handleTrue(); setQuestionNumber(questionNumber + 1) }} className="btn btn-primary">True</button>
            <button onClick={() => {handleFalse(); setQuestionNumber(questionNumber + 1) }} className="btn btn-danger">False</button>
        </div>
       <div>Score: {score}/10</div>
    </div>)
}


export default Question