import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root',
})
export class Libraryservice {
  private bookList: Book[] = [
        {
          id: 1,
          title: 'Harry Potter and the Sorcerer\'s Stone',
          author: 'J.K. Rowling'
        },
        {
          id: 2,
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien'
        },
        {
          id: 3,
          title: 'A Game of Thrones',
          author: 'George R.R. Martin'
        },
    ];

    getBooks() {
        return this.bookList;
    }

    addBook(book: any) {
        this.bookList.push(book);
    }

    deleteBook(id: number) {
        const index = this.bookList.findIndex(book => book.id === id);
        if (index > -1) {
            this.bookList.splice(index, 1);
        }
    }

    updateBook(book: Book) {
        const index = this.bookList.findIndex(b => b.id === book.id);
        if (index > -1) {
            this.bookList[index] = book;
        }
    }
}
