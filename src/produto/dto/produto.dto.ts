import { Type } from "class-transformer";
import { ValidateNested, IsArray, ArrayMinSize, IsNotEmpty, IsNumber, Min, MaxLength, IsPositive, ValidateIf, IsUUID } from "class-validator";

export class CaracteristicaProdutoDTO {
    @IsNotEmpty({ message: 'O nome da característica não pode ser vazio' })
    nome: string;

    @IsNotEmpty({ message: 'A descrição da característica não pode ser vazia' })
    descricao: string;
}

export class ImagemProdutoDTO {
    @IsNotEmpty({ message: 'A URL da imagem não pode ser vazia' })
    url: string;

    @IsNotEmpty({ message: 'A descrição da imagem não pode ser vazia' })
    descricao: string;
}

export class CriaProdutoDTO {
    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    usuarioId: string;
    
    @IsNotEmpty({ message: 'O nome do produto não pode ser vazio' })
    nome: string;

    @IsNumber({}, { message: 'O valor do produto precisa ser um número' })
    @IsPositive({ message: 'O valor do produto precisa ser positivo' })
    @ValidateIf(o => o.valor !== 0, { message: 'O valor do produto não pode ser zero' })
    valor: number;

    @IsNumber({}, { message: 'A quantidade precisa ser um número' })
    @Min(0, { message: 'A quantidade precisa ser igual ou maior que zero' })
    quantidade: number;

    @IsNotEmpty({ message: 'A descrição do produto não pode ser vazia' })
    @MaxLength(1000, { message: 'A descrição não pode ser maior que 1000 caracteres' })
    descricao: string;

    @ValidateNested({ each: true })
    @IsArray({ message: 'As características precisam ser uma lista' })
    @ArrayMinSize(3, { message: 'A lista de características precisa ter pelo menos 3 itens' })
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested({ each: true })
    @IsArray({ message: 'As imagens precisam ser uma lista' })
    @ArrayMinSize(1, { message: 'A lista de imagens precisa ter pelo menos 1 item' })
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsNotEmpty({ message: 'A categoria do produto não pode ser vazia' })
    categoria: string;
}
