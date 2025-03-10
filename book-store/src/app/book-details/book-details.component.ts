import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailsComponent {
  selectedBook = input<Book>(new Book());
}
