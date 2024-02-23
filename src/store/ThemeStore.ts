import { makeAutoObservable } from 'mobx';

export type ThemeMode = 'dark' | 'light';

class ThemeStore {
  theme: ThemeMode = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    document.documentElement.classList.remove(this.theme);
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.add(this.theme);
  }
}

const themeStore = new ThemeStore();

export default themeStore;
