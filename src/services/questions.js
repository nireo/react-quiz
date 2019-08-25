import axios from 'axios';

const initTrueOrFalse = async () => {
  const response = await axios.get(
    'https://opentdb.com/api.php?amount=10&type=boolean'
  );
  return response.data;
};

export default { initTrueOrFalse };
