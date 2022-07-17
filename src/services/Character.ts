import { Axios } from 'axios';
import { Characters, allowedParams } from '../models/Characters';
import { Base } from './Base';

export class Character extends Base<Characters> {
    constructor(axios: Axios) {
        super(axios, 'character', allowedParams);
    }
}