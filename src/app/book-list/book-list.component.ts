import { Component, OnInit } from '@angular/core';
import { type Book } from '../book';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.getBooks();
  }

  books: Book[] = [];

  getBooks(): void {
    this.bookService
      .getBooks()
      .subscribe((booksFromApi) => (this.books = booksFromApi));
  }
}