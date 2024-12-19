import { Either } from "../../../common/either";
import { LoggingServiceDecorator } from "../../application/aspectos/LoggerServiceDecorator";
import { SecurityServiceDecorator } from "../../application/aspectos/SegurityServiceDecorator";
import { DenunciaPostResponseDTO } from "../../application/dtos/denunciaPostResponseDTO";
import { DenunciaPostUseCase } from "../../application/usecases/denunciaPostUseCase";
import { DenunciaPostInfraestructureEntryDTO } from "../dtos/denunciarPostInfraestructureEntryDTO";
import { IUserRepository } from '../../domain/aggregates/user/repository/iRepositoryUser';
import { IPostRepository } from '../../domain/aggregates/post/repository/iPostRepository';
import { IDenunciaRepository } from '../../domain/aggregates/denuncia/repository/iDenunciaRepository';
import { ValidateDenuncia } from "../../domain/services/validateDenuncia";
import { IValidateText } from '../../domain/interfaces/iValidateText';

export class DenunciarPostController{

    private denunciaPostUseCase: DenunciaPostUseCase;

    public constructor(
        private readonly postRepository: IPostRepository,
        private readonly userRepository: IUserRepository,
        private readonly denunciaRepository: IDenunciaRepository,
        private readonly validateText: IValidateText
    ) {

        //Metemos los repositorios por inyeccion de dependencias

        const validateService = new ValidateDenuncia(validateText);

        this.denunciaPostUseCase = new DenunciaPostUseCase(
            postRepository,
            userRepository,
            denunciaRepository,
            validateService
        );
    }

    denunciar(dto: DenunciaPostInfraestructureEntryDTO): Either<Error, DenunciaPostResponseDTO>{
        
        //Composition Root

        const service = new SecurityServiceDecorator<DenunciaPostInfraestructureEntryDTO,DenunciaPostResponseDTO>(
            new LoggingServiceDecorator<DenunciaPostInfraestructureEntryDTO,DenunciaPostResponseDTO>(
                this.denunciaPostUseCase
            )
        )

        //Creacion del servicio + decoradores

        try {

            const entryDTO = {
                idDenunciante: dto.idDenunciante,
                idPost: dto.idPost,
                category: dto.category,
                texto: dto.texto,
            };

            const denunciaService = service.execute(entryDTO);

            return denunciaService;

        } catch (error) {

            return Either.makeLeft<Error, DenunciaPostResponseDTO>(
                new Error('Error inesperado.')
            );

        }
    }
}