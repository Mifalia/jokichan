import { makeAutoObservable } from 'mobx';

export type ThemeMode = 'dark' | 'light';

class ThemeStore {
  theme: ThemeMode = localStorage.getItem('theme-mode') === 'dark' ? 'dark' : 'light';

  constructor() {
    this.setup();
    makeAutoObservable(this);
  }

  setup() {
    document.documentElement.classList.add(this.theme);
  }

  toggleTheme() {
    document.documentElement.classList.remove(this.theme);
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.add(this.theme);
    localStorage.setItem('theme-mode', this.theme);
  }
}

const themeStore = new ThemeStore();

export default themeStore;
