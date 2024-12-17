import { ValueObject } from '../../../../../common/valueobject';

export class LikesPost implements ValueObject<LikesPost>{
    
    public likes: number;

    private constructor(likes: number){
        this.likes=likes;
    }

    public equals(valueObject: LikesPost): boolean {
        if(this.likes==valueObject.getLikes){
            return true;
        }

        return false
    }

    get getLikes(){
        return this.likes;
    }
}