export class DenunciaText{
    private denunciaText: string;

    private constructor(text: string){
        this.denunciaText=text;
    }

    public static create(text: string): DenunciaText {
        if (!text || text.trim() === '') {
            throw new Error('El texto no puede estar vacío');
        }
        return new DenunciaText(text);
    }

    get Value(){
        return this.denunciaText;
    }
}