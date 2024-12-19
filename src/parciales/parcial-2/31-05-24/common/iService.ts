import { Either } from "./either";

interface IService<TService, RService> {
    execute(s: TService): Either<Error, RService>;
}