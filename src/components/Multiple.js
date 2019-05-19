import React, {useState, useEffect} from "react"
import axios from "axios"

const Multiple = (props) => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [questions, setQuestions] = useState([])

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

    return (
        <div>
 
        </div>
    )
}

export default Multiple