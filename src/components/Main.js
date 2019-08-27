import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearQuestions } from '../reducers/questionReducer';

const Main = props => {
  useEffect(() => {
    if (props.questions !== null) {
      props.clearQuestions();
    }
  }, [props]);
  return (
    <div className="jumbotron">
      <h1>React trivia app</h1>
      <div>
        <Link to="/true-or-false">Play true or false</Link>
      </div>
      <div>
        <Link to="/multiple-choice">Play multiple choice</Link>
      </div>
      <div>
        <a
          href="https://github.com/nireo/react-quiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
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
  { clearQuestions }
)(Main);
