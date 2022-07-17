import { DefaultResponse } from './DefaultResponse';

export interface BookDocument {
    _id: string;
    name: string;
}

export interface Books extends DefaultResponse {
    docs: Array<BookDocument>;
}

export const allowedParams = [
    '_id',
    'name'
];
