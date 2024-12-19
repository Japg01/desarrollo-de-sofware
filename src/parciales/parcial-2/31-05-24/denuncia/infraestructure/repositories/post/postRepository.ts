import { Either } from "../../../../common/either";
import { Post } from "../../../domain/aggregates/post/post";
import { IPostRepository } from "../../../domain/aggregates/post/repository/iPostRepository";

export class PostRepository implements IPostRepository{
    findPostById(id: string): Either<Error, Post> {
        throw new Error("Method not implemented.");
    }
    findPostByUserId(id: string): Either<Error, Post> {
        throw new Error("Method not implemented.");
    }
    
}