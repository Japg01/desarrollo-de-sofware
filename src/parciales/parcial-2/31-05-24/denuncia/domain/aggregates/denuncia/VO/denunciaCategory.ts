export class DenunciaCategory{
    private denunciaCategory: string;

    private constructor(category: string){
        this.denunciaCategory=category;
    }

    public static create(category: string): DenunciaCategory {
        if (!category || category.trim() === '') {
            throw new Error('La categoria no puede estar vacía');
        }
        return new DenunciaCategory(category);
    }

    get Value(){
        return this.denunciaCategory;
    }
}