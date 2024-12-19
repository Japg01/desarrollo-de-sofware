import { Either } from "../../../../../common/either";
import { Post } from "../post";

export interface IPostRepository{
    findPostById(id: string): Either<Error,Post>;
    findPostByUserId(id: string): Either<Error, Post>;
}