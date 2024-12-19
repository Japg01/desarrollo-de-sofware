import { Either } from "../../../common/either";
import { DenunciaPostResponseDTO } from "../../application/dtos/denunciaPostResponseDTO";
import { DenunciaPostUseCase } from "../../application/usecases/denunciaPostUseCase";
import { DenunciaPostInfraestructureEntryDTO } from "../dtos/denunciarPostInfraestructureEntryDTO";

export class DenunciarPostController{

    private denunciaPostUseCase: DenunciaPostUseCase;

    public constructor(denunciaPostUseCase: DenunciaPostUseCase) {
        this.denunciaPostUseCase = denunciaPostUseCase;
    }

    denunciar(dto: DenunciaPostInfraestructureEntryDTO): Either<Error, DenunciaPostResponseDTO>{
        
        //Composition Root

        

        //Creacion del servicio + decoradores
        try {
            const entryDTO = {
                idDenunciante: dto.idDenunciante,
                idPost: dto.idPost,
                category: dto.category,
                texto: dto.texto,
            };
            const denunciaService = this.denunciaPostUseCase.execute(entryDTO);
            return denunciaService;
        } catch (error) {
            return Either.makeLeft<Error, DenunciaPostResponseDTO>(
                new Error('Error inesperado.')
            );
        }
    }
}