import { Body, Controller, Post, Get, Put, Param, Delete } from "@nestjs/common";
import { UsuarioRepository } from "../repository/usuario.repository";
import { CriaUsuarioDTO } from "../dto/criaUsuario.dto";
import { UsuarioEntity } from "../entity/usuario.entity";
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from "../dto/listaUsuario.dto";
import { AtualizaUsuarioDTO } from "../dto/atualizaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity;

        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);
        return {
           usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'Criado'
        }
    }

    @Get()
    async listaUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );

        return usuariosLista;
    }

    @Put('/:id')
    async atualizarUsuario(@Param('id')id: string, @Body() dadosParaAtualizar: AtualizaUsuarioDTO){
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, dadosParaAtualizar);
        return{
            usuario: usuarioAtualizado,
            mensagem: 'Atualizado',
        }
    }

    @Delete('/:id')
    async removerUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.usuarioRepository.remove(id);

        return{
            usuario: usuarioRemovido,
            mensagem: 'Deletado',
        }
    }
}