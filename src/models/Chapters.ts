import { DefaultResponse } from './DefaultResponse';

export interface ChapterDocument {
    '_id': string;
    'chapterName': string;
    'book': string;
}

export interface Chapters extends DefaultResponse {
    docs: Array<ChapterDocument>;
}

export const allowedParams = [
    '_id',
    'chapterName',
    'book'
];
