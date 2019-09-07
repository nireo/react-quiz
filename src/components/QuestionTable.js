import React from 'react';

const QuestionTable = props => {
  const questions = props.questionList.map(question => (
    <tr key={question.question}>
      <td>{question.question}</td>
      <td>{question.correct_answer}</td>
    </tr>
  ));

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Question</th>
            <th scope="col">Correct answer</th>
          </tr>
        </thead>
        <tbody>{questions}</tbody>
      </table>
    </div>
  );
};

export default QuestionTable;
