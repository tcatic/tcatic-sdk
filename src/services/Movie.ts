import { Axios } from 'axios';
import { Movies, allowedParams } from '../models/Movies';
import { Base } from './Base';

export class Movie extends Base<Movies> {
    constructor(axios: Axios) {
        super(axios, 'movie', allowedParams);
    }
}