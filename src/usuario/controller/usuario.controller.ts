import { Body, Controller, Post, Get } from "@nestjs/common";
import { UsuarioRepository } from "../repository/usuario.repository";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository){}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario) {
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }

    @Get()
    async listaUsuarios(){
        return this.usuarioRepository.listar();
    }
}