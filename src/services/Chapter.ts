import { Axios } from 'axios';
import { Chapters, allowedParams } from '../models/Chapters';
import { Base } from './Base';

export class Chapter extends Base<Chapters> {
    constructor(axios: Axios) {
        super(axios, 'chapter', allowedParams);
    }
}