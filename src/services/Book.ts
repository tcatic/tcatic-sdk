import { Axios } from 'axios';
import { Books, allowedParams } from '../models/Books';
import { Base } from './Base';

export class Book extends Base<Books> {
    constructor(axios: Axios) {
        super(axios, 'book', allowedParams);
    }
}