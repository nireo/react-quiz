import React, {useState} from "react"

const Multiple = (props) => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    // to clean code up a bit
    const questions = props.questions

    const handleClick = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <button value="China" onClick={() => handleClick}>China</button>
        </div>
    )
}

export default Multiple