package com.sriram.di.repository;

import com.sriram.di.book.Book;

public class BookRepository {
    public Book getBook() {
        return new Book("Spring in Action");
    }
}
