import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "tb_postagens"}) // Se não acrescentar essa entidade, o código vai gerar o nome da tabela igual o da classe. Cria tabela
export class Postagem{

    @ApiProperty()
    @PrimaryGeneratedColumn() // Decorador sempre em cima do atribudo, nesse caso id, Gera chave primária autoincremental.
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) // Bloquear apenas espaços em branco

    @ApiProperty()
    @IsNotEmpty() // Não aceita titulo vazio
    @Column({length: 100, nullable: false}) // Define tamanho e não aceita null
    titulo: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @ApiProperty()
    @UpdateDateColumn() // A data e hora são preenchidos automaticamente
    data: Date;

    @ApiProperty()
    @ManyToOne(() => Tema, (tema) => tema.postagem,{ // Muitos para Um, ou seja, muitas postagens possuem um tema
        onDelete: "CASCADE"
    })
    tema: Tema;
    
    @ApiProperty()
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem,{
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}