import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';

import { Book } from './book';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-root',
  imports: [BookListComponent, BookDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  selectedBook: WritableSignal<Book> = signal(new Book());

  public bookChanged(book: Book): void {
    this.selectedBook.set(book);
  }
}
