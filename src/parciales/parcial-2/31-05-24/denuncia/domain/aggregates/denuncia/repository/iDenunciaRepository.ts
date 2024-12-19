import { Either } from "../../../../../common/either";
import { Denuncia } from "../denuncia";

export interface IDenunciaRepository{
    findDenunciaById(id: string): Either<Error, Denuncia>;
    findDenunciaByUserId(id: string): Either<Error, Denuncia>;
    save(denuncia: Denuncia): Either<Error, Denuncia>
}