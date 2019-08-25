import questionService from '../services/questions';

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_QUESTIONS':
      return action.data;
    default:
      return state;
  }
};

export const initQuestions = () => {
  return async dispatch => {
    const questions = await questionService.initTrueOrFalse();
    dispatch({
      type: 'INIT_QUESTIONS',
      data: questions
    });
  };
};

export default reducer;
