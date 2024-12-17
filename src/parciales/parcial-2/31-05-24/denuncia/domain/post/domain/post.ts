import { AgregateRoot } from "../../../../common/aggregateroot"
import { DomainEvent } from "../../../../common/domainevent"
import { IdUser } from "../../User/domain/VO/idUser";
import { PostCreated } from "./events/postCreated";
import { IdPost } from './VO/idPost';

export class Post extends AgregateRoot<IdPost>{
    
    idUser: IdUser;

    when(event: DomainEvent): void {
        if(event instanceof PostCreated){
            this.id=event.idPost
        }
    }

    equals(object: IdPost): boolean {
        if (this.id.getIdPost===object.getIdPost) return true
        return false
    }

    private constructor(idPost:IdPost, idUser:IdUser) {
        super(idPost, PostCreated.create(idPost))
        this.idUser=idUser;
    }

    public create(id:IdPost,IdUser:IdUser){
        return new Post(id,IdUser)
    }
}