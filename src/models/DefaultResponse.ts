export interface DefaultResponse {
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
}

export const allowedParams = [
    'limit',
    'page',
    'offset'
];
