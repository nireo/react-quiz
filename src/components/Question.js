import React from "react"

const Question = (props) => {
    return (
    <div>
       <h3>{props.questions[0].question}</h3> 
       <div><button className="btn btn-primary">True</button>    <button className="btn btn-danger">False</button></div>
    </div>)
}


export default Question