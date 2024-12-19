import { Either } from "../../../common/either";
import { IService } from "../interfaces/iService";

export class SecurityServiceDecorator<TService, RService> implements IService<TService, RService> {
    private readonly service: IService<TService, RService>;

    public constructor(service: IService<TService, RService>) {
        this.service = service;
    }

    execute(s: TService): Either<Error, RService> {
        if (!this.hasPermission(s)) {
            return Either.makeLeft<Error, RService>(
                new Error('Acceso denegado.')
            );
        }
        return this.service.execute(s);
    }

    private hasPermission(s: TService): boolean {
        //if ('userRole' in s) {
            //const userRole = (s as any).userRole;
            //return userRole === 'ADMIN' || userRole === 'MODERATOR';
        //}
        return false;
    }
}
