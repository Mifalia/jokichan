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
    // managing categories
    const categories = this.categories.filter((category) => category.active === true).map((category) => category.name);
    // send request
    const joke = await JokeApi.fetchJoke({ categories: categories });
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

  toggleCategoryActivity(categoryName: string) {
    if (categoryName === 'Any') {
      for (let i in this.categories) {
        this.categories[i].active = this.categories[i].name === 'Any' ? true : false;
      }
      return;
    }

    for (let i in this.categories) {
      if (this.categories[i].name === categoryName) {
        this.categories[i].active = !this.categories[i].active;
        break;
      }
    }
    const flt = this.categories.filter((category) => category.name !== 'Any' && category.active === true);

    for (let i in this.categories) {
      if (this.categories[i].name === 'Any') {
        this.categories[i].active = flt.length === 0 ? true : false;
      }
    }
  }
}

const jokeStore = new JokeStore();

export default jokeStore;
