import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validation/emailUnico.validator";

export class AtualizaUsuarioDTO {

    @IsNotEmpty({
        message: 'O Nome não pode ser vazio'
    })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, {
        message: 'O email informado é invalido'
    })
    @EmailEhUnico({
        message: 'Email ja cadastrado'
    })
    @IsOptional()
    email: string;

    @MinLength(6, {
        message: 'A senha deve ter pelo menos 6 caracteres'
    })
    @IsOptional()
    senha: string;
}