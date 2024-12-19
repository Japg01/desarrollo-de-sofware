import { Either } from "../../../common/either";
import { IService } from "../interfaces/iService";

export class LoggingServiceDecorator<TService, RService> implements IService<TService, RService> {
    private readonly service: IService<TService, RService>;

    public constructor(service: IService<TService, RService>) {
        this.service = service;
    }

    execute(s: TService): Either<Error, RService> {
        console.log(`Ejecutando servicio con entrada: ${JSON.stringify(s)}`);
        const result = this.service.execute(s);
        if (result.isRight()) {
            console.log(`Resultado exitoso: ${JSON.stringify(result.getRight())}`);
        } else {
            console.error(`Error ocurrido: ${result.getLeft()}`);
        }
        return result;
    }
}
