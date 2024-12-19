import { Either } from "../../../common/either";
import { IPostRepository } from "../../domain/aggregates/post/repository/iPostRepository";
import { IUserRepository } from "../../domain/aggregates/user/repository/iRepositoryUser";
import { DenunciaPostEntryDTO } from "../dtos/denunciaPostEntryDTO";
import { DenunciaPostResponseDTO } from "../dtos/denunciaPostResponseDTO";
import { IService } from "../interfaces/iService";
import { IDenunciaRepository } from "../../domain/aggregates/denuncia/repository/iDenunciaRepository";
import { ValidateDenuncia } from "../../domain/services/validateDenuncia";
import { DenunciaText } from "../../domain/aggregates/denuncia/VO/denunciaText";
import { DenunciaCategory } from "../../domain/aggregates/denuncia/VO/denunciaCategory";
import { Denuncia } from "../../domain/aggregates/denuncia/denuncia";
import { DenunciaId } from "../../domain/aggregates/denuncia/VO/denunciaId";
import { UserId } from "../../domain/aggregates/user/VO/userId";
import { PostId } from "../../domain/aggregates/post/VO/postId";

export class DenunciaPostUseCase implements IService<DenunciaPostEntryDTO, DenunciaPostResponseDTO> {

    public postRepository: IPostRepository;
    public userRepository: IUserRepository;
    public denunciaRepository: IDenunciaRepository;
    public validateService: ValidateDenuncia;

    public constructor(
        post: IPostRepository, 
        user: IUserRepository, 
        denuncia: IDenunciaRepository, 
        validate: ValidateDenuncia
    ){
        this.postRepository=post;
        this.userRepository=user;
        this.denunciaRepository=denuncia;
        this.validateService=validate;
    }

    execute(data: DenunciaPostEntryDTO): Either<Error, DenunciaPostResponseDTO>{

        let denunciante = this.userRepository.findUserById(data.idDenunciante);

        if(denunciante.isLeft()){
            return Either.makeLeft<Error, DenunciaPostResponseDTO>(
                new Error('Usuario denunciante no encontrado')
            );
        }

        let post = this.postRepository.findPostById(data.idPost);

        if(post.isLeft()){
            return Either.makeLeft<Error, DenunciaPostResponseDTO>(
                new Error('Post no encontrado')
            );
        }

        let userPost = this.userRepository.findUserById(data.idDenunciante);

        if(userPost.isLeft()){
            return Either.makeLeft<Error, DenunciaPostResponseDTO>(
                new Error('Usuario denunciante no encontrado')
            );
        }
        
        let denunciaResponse = this.validateService.execute(
            post.getRight(), 
            denunciante.getRight(),
            DenunciaCategory.create(data.category),
            DenunciaText.create(data.texto)
        )

        if(denunciaResponse.isLeft()){
            return Either.makeLeft<Error, DenunciaPostResponseDTO>(
                new Error('No se pudo validar la denuncia.')
            );
        }

        const denuncia = Denuncia.create(
            DenunciaId.create('fasfaga'), //Aqui se deberia generar el id, por simplicidad solo le coloque eso.
            DenunciaText.create(data.texto),
            DenunciaCategory.create(data.category),
            UserId.create(data.idDenunciante),
            PostId.create(data.idPost)
        )

        let denunciaCreate = this.denunciaRepository.save(denuncia);

        return Either.makeRight({...data, success: true});
    }

}