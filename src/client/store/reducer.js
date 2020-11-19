import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import entities from './entities';
//import ui from './ui';

export const rootReducer = (history) => combineReducers({
  ...(history ? {router: connectRouter(history)} : {}),
  entities,
});

export default rootReducer;
