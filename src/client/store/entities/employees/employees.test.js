import fetchMock from "jest-fetch-mock";
import employees, {employeesLoaded, employeesRequested} from './employees';
import configureStore from '../../configureStore';

fetchMock.enableMocks();

const hello = () => 'hello world test';

describe('employees', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
    fetch.resetMocks();
  })

  const employeesSlice = () => store.getState().entities.employees;

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
    expect(employees(undefined, {})).toEqual({list: [], loading: false})
  });

  it('should set loading when requested', () => {
    expect(employees({list: [], loading: false}, employeesRequested))
      .toEqual({list: [], loading: true})
  });
});
