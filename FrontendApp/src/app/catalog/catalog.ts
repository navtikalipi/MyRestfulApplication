import { Component } from '@angular/core';
import { Book } from '../Book';
import { Libraryservice } from '../libraryservice';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  bookList: Book[] = [];
  
  constructor (private libraryService: Libraryservice) {
  }

  ngOnInit() {
    this.bookList = this.libraryService.getBooks();
  }
}
