interface SortOptions {
    sortBy: string;
    order: 'asc' | 'desc';
}

interface FilterOptions {
    filterBy: string;
    equalTo?: string;
    negate?: boolean;
}

export interface Options {
    id?: string;
    action?: 'quote' | 'chapter';
    limit?: number;
    page?: number;
    offset?: number;
    filter?: FilterOptions;
    sort?: SortOptions;
}
