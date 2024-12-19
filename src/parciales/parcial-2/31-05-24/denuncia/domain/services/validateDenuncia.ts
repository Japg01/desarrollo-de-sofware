import { Either } from "../../../common/either";
import { DenunciaCategory } from "../aggregates/denuncia/VO/denunciaCategory";
import { DenunciaText } from "../aggregates/denuncia/VO/denunciaText";
import { IValidateText } from "../interfaces/iValidateText";
import { Post } from "../aggregates/post/post";
import { User } from "../aggregates/user/user";
import { UserState } from "../aggregates/user/VO/userStatus";

export class ValidateDenuncia{

    private validateText: IValidateText;

    public constructor(validateText: IValidateText){
        this.validateText=validateText;
    }

    execute(post: Post, owner: User, category: DenunciaCategory, text: DenunciaText ):Either<Error, Boolean>{
        
        const validateIa = this.validateText.execute(category, text);

        if(validateIa.isLeft()){
            return validateIa;
        }

        const iaResponse = validateIa.getRight();

        if(owner.getState===UserState.warned&&iaResponse){
            return Either.makeRight(true);
        }

        if(post.getLikes.Value>=1000){
            return Either.makeLeft(new Error);
        }

        return Either.makeRight(true);

    }
}