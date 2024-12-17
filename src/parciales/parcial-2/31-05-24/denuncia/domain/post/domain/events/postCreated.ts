import { DomainEvent } from "../../../../../common/domainevent";
import { IdPost } from '../VO/idPost';

export class PostCreated extends DomainEvent{
    
    public idPost: IdPost;

    constructor(id: IdPost){
        super('PostCreated');
        this.idPost = id;
    }
    
    static create(id: IdPost){
        return new PostCreated(id);
    }
}