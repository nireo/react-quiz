import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import QuestionTable from './QuestionTable';
import { initQuestions, clearQuestions } from '../reducers/questionReducer';
import { Link } from 'react-router-dom';

const Question = props => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsRight, setQuestionsRight] = useState([]);
  const [questionsWrong, setQuestionsWrong] = useState([]);

  useEffect(() => {
    if (props.questions === null) {
      props.initQuestions();
    }
  }, [props]);

  if (props.questions === null) {
    return (
      <div className="container text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading questions...</p>
      </div>
    );
  }

  // to clean code up a bit
  const questions = props.questions;

  const ifCorrect = answer => {
    if (questions[questionNumber].correct_answer === answer) {
      setScore(score + 1);
      setQuestionsRight(questionsRight.concat(questions[questionNumber]));
    } else {
      setQuestionsWrong(questionsWrong.concat(questions[questionNumber]));
    }
    setQuestionNumber(questionNumber + 1);
  };

  // display ending page
  if (questionNumber === 10) {
    return (
      <div className="jumbotron">
        <Link to="/" onClick={() => props.clearQuestions()}>
          Go back
        </Link>
        <h2>The game has ended</h2>
        <hr></hr>
        <p>
          You scored {score} points, which means you got {(score / 10) * 100}%
          correct.
        </p>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nireo/react-quiz"
          >
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
        <hr></hr>
      </div>
    );
  }

  return (
    <div>
      <h3>
        {questions[questionNumber].question
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")}{' '}
      </h3>
      <div>
        <Link
          onClick={() => ifCorrect('True')}
          className="waves-effect waves-light btn"
        >
          True
        </Link>
        {'  '}
        <Link
          onClick={() => ifCorrect('False')}
          className="waves-effect waves-light btn"
        >
          False
        </Link>
      </div>
      <div>Score: {score}/10</div>
      <div>Question: {questionNumber + 1}/10</div>
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
  { initQuestions, clearQuestions }
)(Question);
