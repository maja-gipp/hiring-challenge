import {combineReducers} from 'redux';
import stories from './stories/stories';
import employees from './employees/employees';

export default combineReducers({
  stories,
  employees
});
