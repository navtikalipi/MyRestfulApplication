import { Component } from '@angular/core';
import { Myservice } from '../myservice';

@Component({
  selector: 'app-red',
  standalone: false,
  templateUrl: './red.html',
  styleUrl: './red.css',
})
export class Red {
  //interpolation
  name: string = "Red";

  Books: any[] = [
    { title: "Book", author: "Author1"},
    { title: "Book", author: "Author2"},
    { title: "Book", author: "Author3"}
  ];

  //event binding
  onButtonClick() {
    alert('Button Clicked!');
  }

  //two way data binding
  inputText: string = '';

  //property binding
  imageUrl: string = 'https://static.independent.co.uk/2026/02/20/10/27/SEI285973161.jpg?width=1200';

  price: number = 100;

  constructor(private serve1: Myservice) {
    console.log('Red component constructor');
  }

  ngOnInit() {
    console.log(this.serve1.getBooks());
    console.log(this.serve1.greeting());
    this.Books = this.serve1.getBooks();
    this.Books.push(this.serve1.getBooks()[0]);
    this.serve1.addBook({ id: 4, title: "The Catcher", author: "New Author" });
    console.log(this.serve1.getBooks());
    console.log('Red component initialized');
  }

  ngOnChanges() {
    console.log('Red component changed');
  }

  ngOnDestroy() {
    console.log('Red component destroyed');
  }
}
