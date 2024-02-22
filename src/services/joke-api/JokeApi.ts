import { JokeApiRequestOptions, JokeApiResponse } from './types';

class JokeApi {
  private baseUrl = 'https://v2.jokeapi.dev/joke/';
  private defaultOptions: JokeApiRequestOptions = {
    categories: ['Any'],
    type: 'twopart',
    lang: 'en',
  };

  /**
   * Fetch a joke from the API.
   * @async
   * @param {JokeApiRequestOptions} [options={}] - The options for the joke API request.
   * @returns {Promise<JokeApiResponse>} A promise that resolves with the joke API response.
   * @throws {Error} Throws an error if the request fails.
   */
  async fetchJoke(options: JokeApiRequestOptions = {}): Promise<JokeApiResponse> {
    const req_options: JokeApiRequestOptions = {
      ...this.defaultOptions,
      ...options,
    };

    const categoriesToString = req_options.categories?.join(',');
    const endpoint = `${this.baseUrl}${categoriesToString}?type=${req_options.type}&lang=${req_options.lang}`;
    console.log(endpoint);

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw Error('Unable to make request');
    }

    const responseData: JokeApiResponse = await response.json();

    return responseData;
  }
}

export default new JokeApi();
