export class DenunciaPostResponseDTO{
    idPost: string;
    idDenunciante: string;
    texto: string;
    category: string;
    success: boolean;

    public constructor(idPost: string, idDenunciante: string, texto: string, category: string, success: boolean) {
        this.idPost=idPost;
        this.idDenunciante=idDenunciante;
        this.category=category;
        this.texto=texto;
        this.success=success;
    }
}