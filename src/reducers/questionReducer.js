import questionService from '../services/questions';

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_QUESTIONS':
      return action.data;
    case 'CLEAR_QUESTIONS':
      return null;
    default:
      return state;
  }
};

export const initQuestions = type => {
  return async dispatch => {
    let questions;
    if (type === 'multiple') {
      questions = await questionService.initMultiple();
    } else {
      questions = await questionService.initTrueOrFalse();
    }
    dispatch({
      type: 'INIT_QUESTIONS',
      data: questions.results
    });
  };
};

export const clearQuestions = () => {
  return { type: 'CLEAR_QUESTIONS' };
};

export default reducer;
