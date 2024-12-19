export class PostDescription{
    description: string;

    private constructor(description: string){
        this.description=description;
    }

    public static create(descripcion: string): PostDescription {
        if (!descripcion || descripcion.trim() === '') {
            throw new Error('El id no puede estar vacío.');
        }
        return new PostDescription(descripcion);
    }

    get Value(){
        return this.description
    }

}