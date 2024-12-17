import { DomainError } from "../../../../../common/domainerror";

export class PostNotFound extends DomainError{
    constructor(){
        super('Post Not Found Error')
    }
}