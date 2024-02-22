export type JokeCategory = 'Programming' | 'Miscellaneous' | 'Dark' | 'Pun' | 'Spooky' | 'Christmas' | 'Any';
export type JokeType = 'single' | 'twopart';
export type JokeLanguage = 'en' | 'fr';


export interface JokeApiResponse  {
  id?: number;
  type?: JokeType;
  category?: JokeCategory;
  joke?: string;
  setup?: string;
  delivery?: string;
  safe?: boolean;
  lang?: JokeLanguage;
  error?: boolean;
  flags?: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
}

export interface JokeApiRequestOptions {
  categories?: Array<JokeCategory>;
  lang?: 'en' | 'fr';
  type?: JokeType;
}
