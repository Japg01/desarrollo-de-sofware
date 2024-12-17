import { ValueObject } from "../../../../../common/valueobject";

export class UserName implements ValueObject<UserName>{
    
    public name: string;

    private constructor(name: string){
        this.name = name;
    }
    
    equals(valueObject: UserName): boolean {
        if(this.name==valueObject.getUserName){
            return true;
        }

        return false;
    }

    get getUserName(){
        return this.name;
    }

}