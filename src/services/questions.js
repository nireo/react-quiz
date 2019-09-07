import axios from 'axios';

const initTrueOrFalse = async () => {
  const response = await axios.get(
    'https://opentdb.com/api.php?amount=10&type=boolean'
  );
  return response.data;
};

const initMultiple = async () => {
  const response = await axios.get(
    'https://opentdb.com/api.php?amount=10&type=multiple'
  );
  return response.data;
};

const initCustom = async custom => {
  const gameType = custom.gameType ? 'boolean' : 'multiple';
  const difficultyType = () => {
    switch (custom.difficulty) {
      case 'easy':
        return '&difficulty=easy';
      case 'medium':
        return '&difficulty=medium';
      case 'hard':
        return '&difficulty=hard';
      default:
        return '';
    }
  };
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=${
      custom.qAmount
    }&type=${gameType}${difficultyType()}`
  );
  return response.data;
};

export default { initTrueOrFalse, initMultiple, initCustom };
