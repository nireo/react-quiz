import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { initQuestions } from '../reducers/questionReducer';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const Multiple = props => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  useEffect(() => {
    if (props.questions === null) {
      props.initQuestions('multiple');
    }
  }, [props]);
  if (props.questions === null) {
    return <Loading />;
  }

  const renderQuestions = shuffle(
    props.questions[index].incorrect_answers.concat(
      props.questions[index].correct_answer
    )
  ).map(q => (
    <Link onClick={() => handleNextQuestion(q)} className="collection-item">
      {q}
    </Link>
  ));

  const handleNextQuestion = answer => {
    if (answer === props.questions[index].correct_answer) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };

  return (
    <div className="container">
      <h3>
        {props.questions[index].question
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")}
      </h3>
      <div>
        <div className="collection">{renderQuestions}</div>
      </div>
      score: {score}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

export default connect(
  mapStateToProps,
  { initQuestions }
)(Multiple);
