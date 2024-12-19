import { Either } from "../../../common/either";
import { IService } from "../interfaces/iService";
import { BaseDecorator } from "./BaseDecorator";

export class LoggingServiceDecorator<TService, RService> extends BaseDecorator<TService, RService> {
    
    public constructor(service: IService<TService, RService>) {
        super(service);
    }

    execute(s: TService): Either<Error, RService> {
        console.log(`Ejecutando servicio con entrada: ${JSON.stringify(s)}`);
        const result = super.execute(s);
        if (result.isRight()) {
            console.log(`Resultado exitoso: ${JSON.stringify(result.getRight())}`);
        } else {
            console.error(`Error ocurrido: ${result.getLeft()}`);
        }
        return result;
    }
}
