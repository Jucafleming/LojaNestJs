import { Body, Controller, Post } from "@nestjs/common";
import { ProdutoRepository } from "../repository/produto.repository";

@Controller('/produto')
export class ProdutoController{

    constructor(private produtoRepository: ProdutoRepository){}

    @Post()
    async cadastraProduto(@Body() produto){
        this.produtoRepository.salvar(produto);
        return produto;
    }
}