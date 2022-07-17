import { Axios } from 'axios';
import { Quotes, allowedParams } from '../models/Quotes';
import { Base } from './Base';

export class Quote extends Base<Quotes> {
    constructor(axios: Axios) {
        super(axios, 'quote', allowedParams);
    }
}