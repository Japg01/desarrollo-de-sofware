import { UserEmail } from "./VO/userEmail";
import { UserId } from "./VO/userId";
import { UserState } from "./VO/userStatus";

export class User{
    
    private userId: UserId;
    private userEmail: UserEmail;
    private userState: UserState;

    public constructor(id: UserId, email: UserEmail, state: UserState){
        this.userId=id;
        this.userEmail=email;
        this.userState=state;
    }

    public static create(id: UserId, email: UserEmail, state: UserState): User {
        return new User(id, email, state);
    }

    get getId(){
        return this.userId;
    }

    get getEmail(){
        return this.userEmail;
    }

    get getState(){
        return this.userState;
    }

}