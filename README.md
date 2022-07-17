## Lord of The Rings SDK

This module implements the Lord of The Rings API that can be found under https://the-one-api.dev/v2

## How to install and use it

```bash
npm install tarik-catic-sdk
```

The module can be imported and used in your code as:
```javascript
import { LotrSdk } from 'tarik-catic-sdk';
// Create a LotrSdk instance with your bearer token from `the-one-api`
const lotrSdk = new LotrSdk('your-api-key');

// Get all books
const books = await lotrSdk.books.get();

// Get one specific book
const book = await lotrSdk.books.get({
    id: '5cf5805fb53e011a64671582'
});

/* All options that can be set are
{
    id?: string;
    action?: 'quote' | 'chapter';
    limit?: number;
    page?: number;
    offset?: number;
    filter?: FilterOptions;
    sort?: SortOptions;
}
*/
```

The module supports five different endpoints: `/book`, `/character`, `/chapter`, `/movie`, `/quote`. All modules can be accessed in the same way: 
```javascript
lotrSdk.{books | characters | chapters | movies | quotes }.get();
```

## Test the application
To test the application, just run `npm run test` from the root. For now, tests have only been added for the `/book` endpoint and should be expanded.
