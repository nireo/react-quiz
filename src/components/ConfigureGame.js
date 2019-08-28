import React from 'react';

const ConfigureGame = props => {
  return (
    <div className="container">
      <h3>Configure game</h3>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input
                type="number"
                id="question_amount"
                class="validate"
                max="50"
                min="1"
              />
              <label for="question_amount">Question amount</label>
              <span class="helper-text" data-error="wrong" data-success="right">
                Default: 10 questions
              </span>
            </div>
          </div>
          <div>
            <label>Choose difficulty</label>
            <select class="browser-default">
              <option value="" disabled selected>
                Choose difficulty
              </option>
              <option value="any">Any</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div style={{ paddingTop: '2rem ' }}>
            <button class="waves-effect waves-light btn">Start</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfigureGame;
