class Book {
  public id: string;
  public title: string;
  public author: string;
  public price: number;

  constructor(id: string, title: string, author: string, price: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

class Library {
  protected books: Book[];

  constructor() {
    this.books = [];
  }

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public removeBook(id: string): void {
    this.books = this.books.filter(book => book.id !== id);
  }

  public findBookById(id: string): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  public listAllBooks(): Book[] {
    return this.books;
  }
}

class User {
  public userId: string;
  public name: string;
  public email: string;

  constructor(userId: string, name: string, email: string) {
    this.userId = userId;
    this.name = name;
    this.email = email;
  }

  public borrowBook(library: Library, bookId: string): void {
    library.removeBook(bookId);
  }
}
