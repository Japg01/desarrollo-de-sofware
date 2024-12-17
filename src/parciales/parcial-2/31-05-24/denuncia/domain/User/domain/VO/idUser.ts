import { ValueObject } from "../../../../../common/valueobject";

export class IdUser implements ValueObject<IdUser>{
    
    public idUser: String;

    private constructor(id: string){
        this.idUser=id;
    }
    
    public equals(valueObject: IdUser): boolean {
        if(this.idUser==valueObject.getIdUser){
            return true;
        }

        return false;
    }

    get getIdUser(){
        return this.idUser;
    }
}