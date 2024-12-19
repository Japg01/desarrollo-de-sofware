import { User } from '../user';

export class UserId{
    
    userId: string;

    private constructor(id: string){
        this.userId=id
    }

    public static create(id: string): UserId {
        if (!id || id.trim() === '') {
            throw new Error('El id no puede estar vacío.');
        }
        return new UserId(id);
    }
    
    get Value(){
        return this.userId
    }
}