import { LotrSdk } from '../src/index';

describe('Book service tests', () => {
    const lotrSdk = new LotrSdk(process.env.AUTH_TOKEN || '');

    test('get all books', async () => {
        const books = await lotrSdk.books.get();
        expect(books.total).toBe(3);
        expect(books.docs.length).toBe(3);
    });

    test('get specific book', async () => {
        const books = await lotrSdk.books.get({
            id: '5cf5805fb53e011a64671582'
        });
        expect(books.total).toBe(1);
        expect(books.docs.length).toBe(1);
        expect(books.docs[0]._id).toBe('5cf5805fb53e011a64671582');
        expect(books.docs[0].name).toBe('The Fellowship Of The Ring');
    });

    test('sort by name', async () => {
        const books = await lotrSdk.books.get({
            sort: {
                sortBy: 'name',
                order: 'asc'
            }
        });

        expect(books.docs[0].name).toBe('The Fellowship Of The Ring');
        expect(books.docs[1].name).toBe('The Return Of The King');
        expect(books.docs[2].name).toBe('The Two Towers');
    });

    test('filter by name', async () => {
        const books = await lotrSdk.books.get({
            filter: {
                filterBy: 'name',
                equalTo: 'The Two Towers'
            }
        });

        expect(books.docs[0].name).toBe('The Two Towers');
        expect(books.docs.length).toBe(1);
    });

    test('exclude by name', async () => {
        const books = await lotrSdk.books.get({
            filter: {
                filterBy: 'name',
                equalTo: 'The Two Towers',
                negate: true
            }
        });

        expect(books.docs[0].name).not.toBe('The Two Towers');
        expect(books.docs[1].name).not.toBe('The Two Towers');
        expect(books.docs.length).toBe(2);
    });
});
