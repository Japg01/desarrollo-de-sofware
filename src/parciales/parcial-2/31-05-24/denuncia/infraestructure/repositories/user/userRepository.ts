import { Either } from "../../../../common/either";
import { IUserRepository } from "../../../domain/aggregates/user/repository/iRepositoryUser";
import { User } from "../../../domain/aggregates/user/user";

export class UserRepository implements IUserRepository{
    findUserById(id: string): Either<Error, User> {
        throw new Error("Method not implemented.");
    }
    
}