import { DefaultResponse } from './DefaultResponse';

export interface QuoteDocument {
    '_id': string;
    'dialog': string;
    'movie': string;
    'character': string;
    'id': string;
}

export interface Quotes extends DefaultResponse {
    docs: Array<QuoteDocument>;
}

export const allowedParams = [
    '_id',
    'dialog',
    'movie',
    'character',
    'id'
];
