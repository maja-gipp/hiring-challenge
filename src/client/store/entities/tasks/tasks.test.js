//import reducers from './tasks';
import {taskAdded} from './tasks';
import configureStore from '../../configureStore';

const hello = () => 'hello';

describe('tasks', () => {

  //Hello world
  test('hello', () => {
    expect(hello()).toBe('hello');
  });

  //Solitary reducer tests

  //Behavioural / social tests
  test('it should handle taskAdded action', async () => {
    const store = configureStore();
    const task = {title: 'a', completed: false};
    await store.dispatch(taskAdded(task));
    const nextState = store.getState().entities.tasks.list;
    expect(nextState).toHaveLength(1);
    expect(nextState[0]).toEqual(task);
  });
});
