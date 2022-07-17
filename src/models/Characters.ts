import { DefaultResponse } from './DefaultResponse';

export interface CharacterDocument {
    '_id': string;
    'death': string;
    'birth': string;
    'hair': string;
    'realm': string;
    'height': string;
    'spouse': string;
    'gender': string;
    'name': string;
    'race': string;
}

export interface Characters extends DefaultResponse {
    docs: Array<CharacterDocument>;
}

export const allowedParams = [
    '_id',
    'death',
    'birth',
    'hair',
    'realm',
    'height',
    'spouse',
    'gender',
    'name',
    'race'
];
