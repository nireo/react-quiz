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

export default { initTrueOrFalse, initMultiple };
