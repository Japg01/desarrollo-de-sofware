export class PostLikes{
    likes: number;

    private constructor(likes: number){
        this.likes=likes;
    }

    public static create(likes: number): PostLikes {
        if (!likes || likes<0) {
            throw new Error('El post debe tener Likes.');
        }
        return new PostLikes(likes);
    }

    get Value(){
        return this.likes;
    }
}