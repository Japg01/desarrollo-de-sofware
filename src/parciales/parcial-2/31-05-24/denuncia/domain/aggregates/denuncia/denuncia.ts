import { PostId } from "../post/VO/postId";
import { User } from "../user/user";
import { UserId } from "../user/VO/userId";
import { DenunciaCategory } from "./VO/denunciaCategory";
import { DenunciaId } from "./VO/denunciaId";
import { DenunciaText } from "./VO/denunciaText";

export class Denuncia{
    private denunciaId: DenunciaId;
    private denunciaText: DenunciaText;
    private denunciaCategory: DenunciaCategory;
    private userPostOwnerId: UserId;
    private postId: PostId;

    public constructor(
        id: DenunciaId, 
        text: DenunciaText, 
        category: DenunciaCategory,
        owner: UserId,
        post: PostId
    ) {
        this.denunciaId=id;
        this.denunciaText=text;
        this.denunciaCategory=category;
        this.userPostOwnerId = owner;
        this.postId=post;
    }

    public static create(
        id: DenunciaId,
        text: DenunciaText,
        category: DenunciaCategory,
        owner: UserId,
        post: PostId
    ): Denuncia {
        return new Denuncia(id, text, category, owner, post);
    }
}