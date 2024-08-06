import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "tb_postagens" })
export class Postagem {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    public titulo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    public texto: string;

    @UpdateDateColumn()
    @ApiProperty()
    public data: Date;

    @ManyToOne(() => Tema, tema => tema.postagens, {
        onDelete: "CASCADE"
    })
    @ApiProperty({ type: () => Tema })
    public tema: Tema;

    @ManyToOne(() => Usuario, usuario => usuario.postagens, {
        onDelete: "CASCADE"
    })
    @ApiProperty({ type: () => Usuario })
    public usuario: Usuario;
}
