import { Module } from "@nestjs/common";
import { UsuarioController } from "./controller/usuario.controller";
import { UsuarioRepository } from "./repository/usuario.repository";
import { EmailUnicoValidator } from "./validation/emailUnico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailUnicoValidator]
})
export class UsuarioModule {}