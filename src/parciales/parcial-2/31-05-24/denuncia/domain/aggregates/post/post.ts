import { PostDescription } from './VO/postDescription';
import { PostId } from "./VO/postId";
import { PostLikes } from "./VO/postLikes";

export class Post{

    private postId: PostId;
    private postDescription: PostDescription;
    private postLikes: PostLikes;

    public constructor(id: PostId, description: PostDescription, likes: PostLikes) {
        this.postId=id;
        this.postDescription=description;
        this.postLikes=likes
    }

    public static create(id: PostId, description: PostDescription, likes: PostLikes): Post {
        return new Post(id, description, likes);
    }

    get getId(){
        return this.postId;
    }

    get getDescription(){
        return this.postDescription;
    }

    get getLikes(){
        return this.postLikes;
    }

}