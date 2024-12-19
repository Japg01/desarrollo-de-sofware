export class PostId{
    
    postId: string;

    private constructor(id: string){
        this.postId=id
    }

    public static create(id: string): PostId {
        if (!id || id.trim() === '') {
            throw new Error('El id no puede estar vacío.');
        }
        return new PostId(id);
    }

    get Value(){
        return this.postId;
    }

}