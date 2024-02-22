import { makeAutoObservable } from 'mobx';
import JokeApi from 'src/services/joke-api/JokeApi';
import { JokeApiResponse } from 'src/services/joke-api/types';
import categoriesData from './categories.json';

class JokeStore {
  constructor() {
    this.setup();
    makeAutoObservable(this);
  }

  joke: JokeApiResponse = {};
  isLoading: boolean = false;
  categories: Array<any> = [];

  async setup() {
    this.loadCategories();
    await this.generateJoke();
  }

  async generateJoke() {
    this.isLoading = true;
    const joke = await JokeApi.fetchJoke();
    if (!joke.error) {
      this.joke = joke;
    }
    this.isLoading = false;
  }

  loadCategories() {
    const categories = categoriesData.map((category) => {
      return { name: category, active: category === 'Any' ? true : false };
    });
    this.categories = categories;
  }
}

const jokeStore = new JokeStore();

export default jokeStore;
