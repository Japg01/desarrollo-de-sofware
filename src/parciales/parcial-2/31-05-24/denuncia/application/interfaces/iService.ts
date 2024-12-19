import { Either } from "../../../common/either";

export interface IService<TService, RService> {
    execute(s: TService): Either<Error, RService>;
}