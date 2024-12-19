export class UserEmail{
    userEmail: string;

    private constructor(email: string){
        this.userEmail=email;
    }

    public static create(email: string): UserEmail {
        if (!email || email.trim() === '') {
            throw new Error('El email no puede estar vacío.');
        }
        return new UserEmail(email);
    }

    get Value(){
        return this.userEmail
    }

}