import { render, screen } from '@testing-library/angular';

import { Book } from '../book';
import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  test('Given a selected book, then the title of the book should be displayed', async () => {
    const testBook = new Book({
      name: 'Three Men In A Boat',
      author: 'Jerome K. Jerome',
    });
    await render(BookDetailsComponent, {
      imports: [BookDetailsComponent],
      inputs: {
        selectedBook: testBook,
      },
    });

    // Expect to see the author of the book
    await screen.findByText(testBook.name);
    await screen.findByText(testBook.author);
  });
});
