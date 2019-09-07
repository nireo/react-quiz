import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { initQuestions } from '../reducers/questionReducer';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import QuestionTable from './QuestionTable';

const Multiple = props => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsRight, setQuestionsRight] = useState([]);
  const [questionsWrong, setQuestionsWrong] = useState([]);
  useEffect(() => {
    if (props.questions === null) {
      props.initQuestions('multiple');
    }
  }, [props]);
  if (index === 10) {
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
  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  if (props.questions === null) {
    return <Loading />;
  }

  const handleAnswer = answer => {
    if (props.questions[index].correct_answer === answer) {
      setScore(score + 1);
      setQuestionsRight(questionsRight.concat(props.questions[index]));
    } else {
      setQuestionsWrong(questionsWrong.concat(props.questions[index]));
    }
    setIndex(index + 1);
  };

  const renderQuestions = shuffle(
    props.questions[index].incorrect_answers.concat(
      props.questions[index].correct_answer
    )
  ).map(q => (
    <Link onClick={() => handleAnswer(q)} className="collection-item">
      {q}
    </Link>
  ));

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
