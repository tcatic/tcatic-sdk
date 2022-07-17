import { DefaultResponse } from './DefaultResponse';

interface MovieDocument {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
}

export interface Movies extends DefaultResponse {
    docs: Array<MovieDocument>;
}

export const allowedParams = [
    '_id',
    'name',
    'runtimeInMinutes',
    'budgetInMillions',
    'boxOfficeRevenueInMillions',
    'academyAwardNominations',
    'academyAwardWins',
    'rottenTomatoesScore'
];
