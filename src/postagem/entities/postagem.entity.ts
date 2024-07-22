import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "tb_postagens"}) // Se não acrescentar essa entidade, o código vai gerar o nome da tabela igual o da classe. Cria tabela
export class Postagem{

    @PrimaryGeneratedColumn() // Decorador sempre em cima do atribudo, nesse caso id, Gera chave primária autoincremental.
    id: number;

    @IsNotEmpty() // Não aceita titulo vazio
    @Column({length: 100, nullable: false}) // Define tamanho e não aceita null
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // A data e hora são preenchidos automaticamente
    data: Date;

}