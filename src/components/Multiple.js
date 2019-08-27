import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { initQuestions } from '../reducers/questionReducer';
import Loading from './Loading';

const Multiple = props => {
  const [shuffled, setShuffled] = useState([]);
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
    if (shuffled === [] && props.questions !== null) {
      setShuffled();
    }
  }, [props]);
  if (props.questions === null) {
    return <Loading />;
  }

  return <div className="container">loaded</div>;
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
