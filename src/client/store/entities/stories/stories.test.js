import fetchMock from "jest-fetch-mock";
import stories, {storiesLoaded, storiesRequested} from './stories';
import configureStore from '../../configureStore';

fetchMock.enableMocks();

const hello = () => 'hello world test';

describe('stories', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
    fetch.resetMocks();
  })

  const storiesSlice = () => store.getState().entities.stories;

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
    expect(stories(undefined, {})).toEqual({topStories: [], loading: false})
  });

  it('should set loading when requested', () => {
    expect(stories({topStories: [], loading: false}, storiesRequested))
      .toEqual({topStories: [], loading: true})
  });

  /*
    Behavioural / social tests
  */

  test('it should load all stories', async () => {
    const stories = [{title: 'a', completed: false}];
    fetch.mockResponseOnce(JSON.stringify(stories));

    await store.dispatch(storiesLoaded());

    expect(storiesSlice().topStories).toHaveLength(1);
    expect(storiesSlice().topStories).toEqual(stories);
  });
});
