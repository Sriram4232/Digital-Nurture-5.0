package com.sriram.di.service;

import com.sriram.di.repository.BookRepository; 
import com.sriram.di.book.Book; 

public class BookService {

    private BookRepository bookRepository;

    // 🔧 Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void printBookTitle() {
        Book book = bookRepository.getBook();
        System.out.println("Book title: " + book.getTitle());
    }
}
