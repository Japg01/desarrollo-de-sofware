import { Either } from "../../../common/either";
import { IService } from "../interfaces/iService";

export abstract class BaseDecorator<TService, RService> implements IService<TService, RService> {
    protected readonly service: IService<TService, RService>;

    public constructor(service: IService<TService, RService>) {
        this.service = service;
    }

    execute(s: TService): Either<Error, RService> {
        return this.service.execute(s); // Delegación por defecto
    }
}