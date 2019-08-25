import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Question from './components/Question';
import Multiple from './components/Multiple';
import Routes from './Routes';

function App() {
  const [questions, setQuestions] = useState([]);
  const [gameOn, setGameOn] = useState(false);
  const [multiple, setMultiple] = useState(false);
  const [questionType, setQuestionType] = useState('');

  // api request
  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&type=boolean')
      .then(response => {
        const objectArray = Object.values(response.data);

        // since get returns results_status and results [1] includes all the question data
        setQuestions(objectArray[1]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // displays a different site to users, if they started the game
  if (gameOn) {
    return (
      <div className="jumbotron">
        <Question questions={questions} />
      </div>
    );
  }

  if (multiple) {
    return (
      <div className="jumbotron">
        <Multiple questions={questions} />
      </div>
    );
  }

  // render starting page
  return (
    <div className="jumbotron">
      <Routes />
    </div>
  );
}

export default App;
