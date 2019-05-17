import React from "react"

const QuestionTable = (props) => {
    const questions = props.questionList.map(question => 
        <tr>
            <th scope="row">{question.number}</th>
            <td>{question.question}</td>
            <td>{question.yourAnswer}</td>
            <td>{question.correctAnswer}</td>
        </tr>
    )

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Question</th>
                        <th scope="col">Your Answer</th>
                        <th scope="col">Correct Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {questions}
                </tbody>
            </table>
        </div>
    )
}

export default QuestionTable