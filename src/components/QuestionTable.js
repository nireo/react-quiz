import React from "react"

const QuestionTable = (props) => {
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
            </table>
        </div>
    )
}

export default QuestionTable