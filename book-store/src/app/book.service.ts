import { Observable, of, throwError } from 'rxjs';

import { BOOKS } from './mock-book-data';
import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookStore = BOOKS;

  constructor() {}

  public getBooks(): Observable<Book[]> {
    return of(this.bookStore);
  }

  public getBookDetails(bookName: string): Observable<Book> {
    const book = this.bookStore.find((book) => book.name === bookName);
    if (book) {
      return of(book);
    } else {
      return throwError(
        () => new Error(`Book with name "${bookName}" not found`)
      );
    }
  }
}
