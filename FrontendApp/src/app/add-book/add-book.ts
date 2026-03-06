import { Component } from '@angular/core';
import { Libraryservice } from '../libraryservice';

@Component({
  selector: 'app-add-book',
  standalone: false,
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
  id: number = 0;
  title: string = '';
  author: string = '';

  constructor(private libraryService: Libraryservice) {
  }

  addBookToList() {
    const newBook = {
      id: this.id,
      title: this.title,
      author: this.author,
    };

    this.libraryService.addBook(newBook);
    this.title = '';
    this.author = '';
  }
}
