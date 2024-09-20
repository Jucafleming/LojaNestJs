import { Body, Controller, Post, Get } from "@nestjs/common";
import { UsuarioRepository } from "../repository/usuario.repository";
import { CriaUsuarioDTO } from "../dto/criaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository){}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    } 

    @Get()
    async listaUsuarios(){
        return this.usuarioRepository.listar();
    }
}