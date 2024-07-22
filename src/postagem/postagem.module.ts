import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemController } from "./controllers/postagem.controller";
import { PostagemService } from "./entities/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService], //servicos
    controllers: [PostagemController],
    exports: [TypeOrmModule] //disponivel para outros modulos
})
 
export class PostagemModule{}
 