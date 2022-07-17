import { Axios } from 'axios';
import { Book } from './services/Book';
import { Chapter } from './services/Chapter';
import { Character } from './services/Character';
import { Movie } from './services/Movie';
import { Quote } from './services/Quote';

export class LotrSdk {
    private axios: Axios;
    public books: Book;
    public characters: Character;
    public chapters: Chapter;
    public movies: Movie;
    public quotes: Quote;

    public constructor(bearerToken: string) {
        this.axios = new Axios({
            'baseURL': 'https://the-one-api.dev/v2',
            'headers': {
                'Authorization': `Bearer ${bearerToken}`
            }
        });

        this.books = new Book(this.axios);
        this.characters = new Character(this.axios);
        this.chapters = new Chapter(this.axios);
        this.movies = new Movie(this.axios);
        this.quotes = new Quote(this.axios);
    }
}
