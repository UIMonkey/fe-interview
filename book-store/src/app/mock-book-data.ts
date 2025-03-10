import { Book } from './book';

export const BOOKS: Book[] = [
  new Book({
    name: "Harry Potter and the Philosopher's Stone",
    author: 'J.K Rowling',
  }),
  new Book({ name: 'The Hobbit', author: 'J.R.R Tolkien' }),
  new Book({ name: 'Night Watch', author: 'Terry Pratchett' }),
  new Book({ name: 'Frankenstein', author: 'Mary Shelly' }),
  new Book({ name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }),
];
