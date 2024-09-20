import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validation/emailUnico.validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({
        message: 'O Nome não pode ser vazio'
    })
    nome: string;

    @IsEmail(undefined, {
        message: 'O email informado é invalido'
    })
    @EmailEhUnico({
        message: 'Email ja cadastrado'
    })
    email: string;

    @MinLength(6, {
        message: 'A senha deve ter pelo menos 6 caracteres'
    })
    senha: string;
}