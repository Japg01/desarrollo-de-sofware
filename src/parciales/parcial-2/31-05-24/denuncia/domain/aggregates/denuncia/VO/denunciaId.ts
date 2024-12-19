import { Denuncia } from "../denuncia";

export class DenunciaId{
    private denunciaId: string;

    private constructor(id: string){
        this.denunciaId=id;
    }

    public static create(id: string): DenunciaId {
        if (!id || id.trim() === '') {
            throw new Error('La categoria no puede estar vacía');
        }
        return new DenunciaId(id);
    }

    get Value(){
        return this.denunciaId;
    }
}