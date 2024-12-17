//Práctica Básica de POO

import { Book } from './ejercicio1';

class User{
    
    constructor(
        readonly id: string, 
        readonly name: string, 
        private borrowedBooks: Book[]
    ) {}

    public getBooks(): Book[]{
        return this.borrowedBooks;
    }

    public borrowBook(book: Book): void{
        this.borrowedBooks.push(book);
    }

    public returnBook(bookId: string): void{
        for(let i=0; i<this.borrowedBooks.length; i++){
            if(this.borrowedBooks[i].getId()==bookId){
                this.borrowedBooks.splice(i,1);
            }
        }
    }

}

export class Library{
    
    constructor(
        private books: Book[] = [],
        private users: User[] = []
    ){}

    public addBook(book: Book): void{
        this.books.push(book);
    }

    public showUnreadBooks(): void{
        for (const book of this.books) { 
            if (!book.getIsRead()) {
                console.log(`Libro sin leer: ${book.getTitle()} del autor "${book.getAuthor()}"`);
            }
        }
    }

    public registerUser(user: User): void {
        for(let i=0; i<this.users.length; i++){
            if(this.users[i].id == user.id){
                console.log(`El usuario: ${user.name} ya se encuentra registrado en el sistema.`);
                return
            } else {
                this.users.push(user);
            }
        }
    }

    public lendBook(user: User, bookId: string): void {
        const book = this.books.find(b => b.getId() === bookId);

        if (!book) {
            console.log(`El libro con ID ${bookId} no existe en la biblioteca.`);
            return;
        }
        if (book.getIsRead()) {
            console.log(`El libro "${book.getTitle()}" ya ha sido prestado.`);
            return;
        }
        const userBooks = user.getBooks();
        if (userBooks.some(b => b.getId() === bookId)) {
            console.log(`El usuario "${user.name}" ya tiene el libro "${book.getTitle()}".`);
            return;
        }
        user.borrowBook(book);
        book.readBook();
        console.log(`El libro "${book.getTitle()}" ha sido prestado al usuario "${user.name}".`);
    }

    public receiveBook(user: User, bookId: string): void {
        const userBooks = user.getBooks();
        const bookIndex = userBooks.findIndex(b => b.getId() === bookId);

        if (bookIndex === -1) {
            console.log(`El usuario "${user.name}" no tiene el libro con ID "${bookId}".`);
            return;
        }
        const [returnedBook] = userBooks.splice(bookIndex, 1);
        returnedBook.markAsUnread();

        console.log(`El libro "${returnedBook.getTitle()}" ha sido devuelto por el usuario "${user.name}".`);
    }
}