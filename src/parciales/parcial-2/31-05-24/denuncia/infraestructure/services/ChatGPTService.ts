import { Either } from "../../../common/either";
import { DenunciaCategory } from "../../domain/aggregates/denuncia/VO/denunciaCategory";
import { IValidateText } from "../../domain/interfaces/iValidateText";
import { DenunciaText } from '../../domain/aggregates/denuncia/VO/denunciaText';

export class ChatGPTService implements IValidateText{
    
    execute(category: DenunciaCategory, text: DenunciaText): Either<Error, Boolean> {
        throw new Error("Method not implemented.");
    }

}