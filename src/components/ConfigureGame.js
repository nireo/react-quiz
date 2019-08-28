import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { initQuestions } from '../reducers/questionReducer';

const ConfigureGame = props => {
  const [difficulty, setDifficulty] = useState('any');
  const [qAmount, setQAmount] = useState(10);
  // true = true-or-false | false = multiple choice
  const [gameType, setGameType] = useState(true);

  const getQuestions = event => {
    event.preventDefault();
    const info = {
      difficulty,
      qAmount,
      gameType
    };
    props.initQuestions(null, info);

    // redirect to game view
    if (gameType) {
      return <Redirect to="/true-or-false" />;
    } else {
      return <Redirect to="/multiple" />;
    }
  };

  return (
    <div className="container">
      <h3>Configure game</h3>
      <div class="row">
        <form class="col s12" onSubmit={getQuestions}>
          <div class="row">
            <div class="input-field col s12">
              <input
                type="number"
                id="question_amount"
                class="validate"
                max="50"
                min="1"
                value={qAmount}
                onChange={({ target }) => setQAmount(target.value)}
              />
              <label for="question_amount">Question amount</label>
              <span class="helper-text">Default: 10 questions</span>
            </div>
          </div>
          <div>
            <label>Choose difficulty</label>
            <select class="browser-default">
              <option value="" disabled selected>
                Choose difficulty
              </option>
              <option value="any" onClick={() => setDifficulty('any')}>
                Any
              </option>
              <option value="easy" onClick={() => setDifficulty('easy')}>
                Easy
              </option>
              <option value="medium" onClick={() => setDifficulty('medium')}>
                Medium
              </option>
              <option value="hard" onClick={() => setDifficulty('hard')}>
                Hard
              </option>
            </select>
          </div>
          <div>
            <p>
              <label>
                <input
                  name="with-gap"
                  type="radio"
                  checked={gameType}
                  onClick={() => setGameType(true)}
                />
                <span>True-or-false</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  class="with-gap"
                  name="group1"
                  type="radio"
                  checked={!gameType}
                  onClick={() => setGameType(false)}
                />
                <span>Multiple choice</span>
              </label>
            </p>
          </div>
          <div style={{ paddingTop: '2rem ' }}>
            <button type="submit" class="waves-effect waves-light btn">
              Start
            </button>
          </div>
          <div>
            <Link to="/">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(
  null,
  { initQuestions }
)(ConfigureGame);
