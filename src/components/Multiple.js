import React, {useState, useEffect} from "react"
import axios from "axios"

const Multiple = () => {
    const [questions, setQuestions] = useState([])
    const [questionNumber, setQuestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [falseAnswers, setFalseAnswers] = useState([])
    const [allAnswers, setAllAnswers] = useState([])

    useEffect(() =>{
        axios.get("https://opentdb.com/api.php?amount=10&type=multiple")
            .then(response => {
                // since the api response in an object turns object in to a simpler array for useState
                const objectArray = Object.values(response.data)

                // since get returns results_status and results [1] includes all the question data
                setQuestions(objectArray[1])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleClick = (value) => {
        if (value == questions[questionNumber].correct_answer) {
            setScore(score + 1)
        }
    }

    return (
        <div>

        </div>
    )
}

export default Multiple