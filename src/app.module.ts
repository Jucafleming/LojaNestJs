import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/usuario.controler';


@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
