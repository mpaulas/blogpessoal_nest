import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_postagens"})
export class Postagem {
    @PrimaryGeneratedColumn()
    @ApiProperty() 
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable:false})
    @ApiProperty() 
    titulo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable:false})
    @ApiProperty() 
    texto: string;

    @UpdateDateColumn()
    @ApiProperty() 
    data: Date;

    
    @ManyToOne(() => Tema, (tema) => tema.postagem,{ // Muitos para Um, ou seja, muitas postagens possuem um tema
        onDelete: "CASCADE"
    })
    @ApiProperty()
    tema: Tema;
    
    
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem,{
        onDelete: "CASCADE"
    })
    @ApiProperty()
    usuario: Usuario;
}