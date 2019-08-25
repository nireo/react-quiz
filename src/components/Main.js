import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
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

export default Main;
