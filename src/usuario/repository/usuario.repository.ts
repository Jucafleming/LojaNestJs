import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "../entity/usuario.entity";

@Injectable()
export class UsuarioRepository{
    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity){
        this.usuarios.push(usuario);
    }

    async listar(){
        return this.usuarios;
    }

    async existeComEmail(email: string){
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return possivelUsuario !== undefined;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>){
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );

        if(!possivelUsuario){
            throw new Error('Usuario Nao Existe');
        }

        Object.entries(dadosDeAtualizacao).forEach( ([chave, valor]) => {
            if(chave === 'id'){
                return;
            }
            possivelUsuario[chave] = valor;
        } )

        return possivelUsuario;
    }

    private buscaporid(id: string){
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );
        
        if(!possivelUsuario){
            throw new Error('Usuario Nao Existe');
        }

        return possivelUsuario;
    }
    async remove(id: string){
        const usuario = this.buscaporid(id);
        this.usuarios = this.usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
            )
        return usuario;
    }
}