import { error } from "console";
import { ValueObject } from "../../../../../common/valueobject";

export class DescriptionPost implements ValueObject<DescriptionPost>{
    
    public description!: string;

    private constructor(description: string){
        
        if(description.length>150){
            console.log(`La descripcion debe ser menor a 150 caracteres`);
            return
        } 

        this.description = description;
    }

    public equals(valueObject: DescriptionPost): boolean {
        if(this.description==valueObject.getDescription){
            return true;
        }
        return false
    }

    get getDescription(){
        return this.description;
    }
}