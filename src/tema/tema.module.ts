import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./entities/tema.entity";
import { TemaController } from "./controllers/tema.controller";
import { TemaService } from "./services/tema.service";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService], //servicos
    controllers: [TemaController],
    exports: [TypeOrmModule] //disponivel para outros modulos
})
 
export class TemaModule{}
