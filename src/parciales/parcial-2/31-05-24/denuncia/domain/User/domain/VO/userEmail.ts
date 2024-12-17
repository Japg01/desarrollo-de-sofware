import { ValueObject } from "../../../../../common/valueobject";

export class UserEmail implements ValueObject<UserEmail>{
    
    public email: string;

    private constructor(email: string){
        this.email=email;
    }

    equals(valueObject: UserEmail): boolean {
        if(this.email==valueObject.email){
            return true;
        }

        return false;
    }

    get getEmail(){
        return this.email;
    }

}