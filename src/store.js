import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import questionReducer from './reducers/questionReducer';

const reducer = combineReducers({
  questions: questionReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
