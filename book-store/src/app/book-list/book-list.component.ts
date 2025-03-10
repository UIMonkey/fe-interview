import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  WritableSignal,
  inject,
  output,
  signal,
} from '@angular/core';

import { Book } from '../book';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {
  books: WritableSignal<Book[]> = signal([]);
  bookChanged = output<Book>();
  #bookService = inject(BookService);

  ngOnInit(): void {
    this.#bookService.getBooks().subscribe((data) => {
      this.books.set([...data]);
    });
  }

  bookSelected(book: Book): void {
    this.bookChanged.emit(book);
  }
}
