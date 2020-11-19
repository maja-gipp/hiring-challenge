import fetchMock from "jest-fetch-mock";
import tasks, {taskAdded, tasksRequested, tasksLoaded} from './tasks';
import configureStore from '../../configureStore';

fetchMock.enableMocks();

const hello = () => 'hello world test';

describe('tasks', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
    fetch.resetMocks();
  })

  const tasksSlice = () => store.getState().entities.tasks;

  /*
    Hello world test
  */

  test('hello world test', () => {
    expect(hello()).toBe('hello world test');
  });

  /*
    Solitary reducer tests
  */

  it('should handle initial state', () => {
    expect(tasks(undefined, {})).toEqual({list: [], loading: false})
  });

  it('should set loading when requested', () => {
    expect(tasks({list: [], loading: false}, tasksRequested()))
      .toEqual({list: [], loading: true})
  });

  /*
    Behavioural / social tests
  */

  test('it should add a task', async () => {
    const task = {title: 'a', completed: false};

    await store.dispatch(taskAdded(task));

    expect(tasksSlice().list).toHaveLength(1);
    expect(tasksSlice().list).toContainEqual(task);
  });

  test('it should load all tasks', async () => {
    const tasks = [{title: 'a', completed: false}];
    fetch.mockResponseOnce(JSON.stringify(tasks));

    await store.dispatch(tasksLoaded());

    expect(tasksSlice().list).toHaveLength(1);
    expect(tasksSlice().list).toEqual(tasks);
  });
});
