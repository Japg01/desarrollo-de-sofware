//Práctica Básica de POO

export class Book{
    
    constructor(private id: string ,private title: string, private author: string, private isRead: boolean){
        this.id = id;
        this.title=title;
        this.author=author;
        this.isRead=false;
    }

    public getId(): string{
        return this.id;
    }

    public getTitle(): string{
        return this.title;
    }

    public getAuthor(): string{
        return this.author;
    }

    public getIsRead(): boolean{
        return this.isRead;
    }
    
    public readBook(): void{
        this.isRead=true;
    }

    public markAsUnread(): void {
        this.isRead = false;
    }
}

export class Library{
    private books: Book[] = [];

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
}

const library = new Library();
library.addBook(new Book("l1","1984", "George Orwell", false));
library.addBook(new Book("l2", "Brave New World", "Aldous Huxley", true));
library.showUnreadBooks();