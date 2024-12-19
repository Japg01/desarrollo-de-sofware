import { Either } from "../../../../../common/either";
import { User } from "../user";
import { UserId } from "../VO/userId";

export interface IUserRepository{
    findUserById(id: string): Either<Error, User>
}