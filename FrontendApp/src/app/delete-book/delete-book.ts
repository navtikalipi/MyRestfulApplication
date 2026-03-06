import { Component } from '@angular/core';
import { Libraryservice } from '../libraryservice';

@Component({
  selector: 'app-delete-book',
  standalone: false,
  templateUrl: './delete-book.html',
  styleUrl: './delete-book.css',
})
export class DeleteBook {
  id: number = 0;

  constructor(private libraryService: Libraryservice) {
  }

  deleteBookFromList() {
    this.libraryService.deleteBook(this.id);
    this.id = 0;
  }
}
