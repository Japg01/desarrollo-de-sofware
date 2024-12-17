import { ValueObject } from "../../../../../common/valueobject";

export class IdPost implements ValueObject<IdPost>{
    
    public idPost: string;

    private constructor(id:string) {
        this.idPost=id;
    }

    public equals(valueObject: IdPost): boolean {
        if(this.idPost == valueObject.getIdPost){
            return true;
        }

        return false;
    }

    get getIdPost(){
        return this.idPost;
    }

}