import { Component } from '@angular/core';
import { Libraryservice } from '../libraryservice';

@Component({
  selector: 'app-update-book',
  standalone: false,
  templateUrl: './update-book.html',
  styleUrl: './update-book.css',
})
export class UpdateBook {
  id: number = 0;
  title: string = '';
  author: string = '';

  constructor(private libraryService: Libraryservice) {
  }

  updateBookInList() {
    const updatedBook = {
      id: this.id,
      title: this.title,
      author: this.author,
    };

    this.libraryService.updateBook(updatedBook);
    this.id = 0;
    this.title = '';
    this.author = '';
  }
}
