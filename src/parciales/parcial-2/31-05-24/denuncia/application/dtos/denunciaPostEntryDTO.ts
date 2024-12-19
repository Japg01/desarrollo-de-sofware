export class DenunciaPostEntryDTO{
    idPost: string;
    idDenunciante: string;
    texto: string;
    category: string;

    public constructor(idPost: string, idDenunciante: string, texto: string, category: string) {
        this.idPost=idPost;
        this.idDenunciante=idDenunciante;
        this.category=category;
        this.texto=texto;
    }
}