import { DomainEvent } from "../../../../../common/domainevent";
import { IdUser } from "../VO/idUser";

export class UserCreated extends DomainEvent{

    public idUser: IdUser;

    private constructor(id: IdUser){
        super('UserCreated');
        this.idUser= id;
    }

    static create(id: IdUser){
        return new UserCreated(id);
    }
}