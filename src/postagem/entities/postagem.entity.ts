import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

@Entity({ name: "tb_postagens"}) // Se não acrescentar essa entidade, o código vai gerar o nome da tabela igual o da classe. Cria tabela
export class Postagem{

    @PrimaryGeneratedColumn() // Decorador sempre em cima do atribudo, nesse caso id, Gera chave primária autoincremental.
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) // Bloquear apenas espaços em branco

    @IsNotEmpty() // Não aceita titulo vazio
    @Column({length: 100, nullable: false}) // Define tamanho e não aceita null
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // A data e hora são preenchidos automaticamente
    data: Date;

    // Muitos para Um, ou seja, muitas postagens possuem um tema
    @ManyToOne(() => Tema, (tema) => tema.postagem,{
        onDelete: "CASCADE"
    })
    tema: Tema;
    
}