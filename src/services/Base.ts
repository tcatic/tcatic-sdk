import { Axios } from 'axios';
import { Options } from '../utils/Options';

/**
 * Abstract class which implements the API calls for all endpoints.
 * The implementations set the `basePath` (e.g. /movie, /book) and the
 * `allowedParams` (used for filtering and sorting). The rest of the
 * implementation is the same
 */
export abstract class Base<T> {
    private axios: Axios;
    protected basePath: string;
    protected allowedParams: Array<string>;

    constructor(axios: Axios, basePath: string, allowedParams: Array<string>) {
        this.axios = axios;
        this.basePath = basePath;
        this.allowedParams = allowedParams;
    }

    /**
     * Sends the API request
     *
     * @param path - the path to the API endpoint
     * @returns the API response depending on the path of type <T>
     */
    private async request(path: string): Promise<T> {
        const response = await this.axios.get(path);
        return JSON.parse(response.data) as T;
    }

    /**
     * Prepares the API request and sets all query parameters (if needed). If non are set it will request
     * all objects for a specific type
     *
     * @param options - id of the object, additional `action` (e.g. /quote), and all other query params
     * @returns the data from the API call
     */
    public async get(options?: Options): Promise<T> {
        let path = this.basePath;

        if (options?.id)
            path += `/${options.id}`;

        if (options?.action)
            path += `/${options.action}`;

        if (options)
            path += this.getParams(options);

        return this.request(path);
    }

    /**
     * Sets all query parameters that are allowed on the request
     *
     * @param options - Options that can be set on the request as query params
     * @returns all query params as string
     */
    private getParams(options: Options): string {
        const params = [];

        if (options.limit)
            params.push(`limit=${options.limit}`);

        if (options.offset)
            params.push(`offset=${options.offset}`);

        if (options.page)
            params.push(`page=${options.page}`);

        if (options.sort && this.allowedParams.includes(options.sort.sortBy))
            params.push(`sort=${options.sort.sortBy}:${options.sort.order}`);

        if (options.filter && this.allowedParams.includes(options.filter.filterBy)) {
            let key = options.filter.filterBy;
            if (!options.filter.equalTo && options.filter.negate)
                key = `!${options.filter.filterBy}`;

            if (options.filter.equalTo && options.filter.negate)
                key = `${options.filter.filterBy}!`

            const value = options.filter.equalTo ? `=${options.filter.equalTo}` : '';
            params.push(`${key}${value}`);
        }

        return params.length === 0 ? '' : `?${params.join('&')}`;
    }
}