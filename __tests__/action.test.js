import { renderHook, act } from '@testing-library/react-hooks';
import { fetchTopHeadlines, fetchEverything, fetchArticlesByFilter } from '../src/actions/news';
import { getTopHeadlines, getEverything } from '../src/services/news';

jest.mock('../src/services/news');

describe('news actions', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    getTopHeadlines.mockResolvedValue([{ id: '1', title: 'Test Headline' }]);
    getEverything.mockResolvedValue([{ id: '2', title: 'Test Article' }]);
  });

  it('fetches top headlines', async () => {
    await act(async () => {
      await fetchTopHeadlines(dispatch);
    });

    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_HEADLINES', payload: [{ id: '1', title: 'Test Headline' }] });
  });

  it('fetches everything', async () => {
    await act(async () => {
      await fetchEverything(dispatch, 'test');
    });

    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_EVERYTHING', payload: [{ id: '2', title: 'Test Article' }] });
  });

  it('fetches articles by filter', async () => {
    await act(async () => {
      await fetchArticlesByFilter(dispatch, 'test');
    });

    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_ARTICLES_BY_FILTER', payload: [{ id: '2', title: 'Test Article' }] });
  });
});
