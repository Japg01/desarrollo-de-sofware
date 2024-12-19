import { Either } from "../../../../common/either";
import { Denuncia } from "../../../domain/aggregates/denuncia/denuncia";
import { IDenunciaRepository } from "../../../domain/aggregates/denuncia/repository/iDenunciaRepository";

export class DenunciaRepository implements IDenunciaRepository{
    findDenunciaById(id: string): Either<Error, Denuncia> {
        throw new Error("Method not implemented.");
    }
    findDenunciaByUserId(id: string): Either<Error, Denuncia> {
        throw new Error("Method not implemented.");
    }
    save(denuncia: Denuncia): Either<Error, Denuncia> {
        throw new Error("Method not implemented.");
    }
    
}