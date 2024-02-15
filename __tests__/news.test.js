var axios = require('axios');
var news = require('../src/services/news');
var getTopHeadlines = news.getTopHeadlines;
var getEverything = news.getEverything;

jest.mock('axios');

var mockedAxios = axios;

describe('News Service', function () {
  afterEach(function () {
    jest.resetAllMocks();
  });

  it('should fetch top headlines', function () {
    var articles = [{ title: 'Article 1' }, { title: 'Article 2' }];
    mockedAxios.get.mockResolvedValueOnce({ data: { articles: articles } });

    return getTopHeadlines('us').then(function (result) {
      expect(result).toEqual(articles);
      expect(mockedAxios.get).toHaveBeenCalledWith('https://newsapi.org/v2/top-headlines?country=us&apiKey=cb19a0d47e124e289849803000737fd1&pageSize=4');
    });
  });

  it('should fetch everything', function () {
    var articles = [{ title: 'Article 1' }, { title: 'Article 2' }];
    mockedAxios.get.mockResolvedValueOnce({ data: { articles: articles } });

    return getEverything('bitcoin', 10).then(function (result) {
      expect(result).toEqual(articles);
      expect(mockedAxios.get).toHaveBeenCalledWith('https://newsapi.org/v2/everything?q=bitcoin&apiKey=cb19a0d47e124e289849803000737fd1&pageSize=10');
    });
  });

  it('should handle error in getTopHeadlines', function () {
    var error = new Error('Network error');
    mockedAxios.get.mockRejectedValueOnce(error);

    return expect(getTopHeadlines('us')).rejects.toThrow(error);
  });

  it('should handle error in getEverything', function () {
    var error = new Error('Network error');
    mockedAxios.get.mockRejectedValueOnce(error);

    return expect(getEverything('bitcoin', 10)).rejects.toThrow(error);
  });
});
