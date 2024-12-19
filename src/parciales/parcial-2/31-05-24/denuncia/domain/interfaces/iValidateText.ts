import { Either } from "../../../common/either";
import { DenunciaCategory } from "../aggregates/denuncia/VO/denunciaCategory";
import { DenunciaText } from "../aggregates/denuncia/VO/denunciaText";

export interface IValidateText{
    execute(category: DenunciaCategory, text: DenunciaText): Either<Error, Boolean>;
}