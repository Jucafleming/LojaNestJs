import { Body, Controller, Post, Get } from "@nestjs/common";
import { ProdutoRepository } from "../repository/produto.repository";

@Controller('/produto')
export class ProdutoController{

    constructor(private produtoRepository: ProdutoRepository){}

    @Post()
    async cadastraProduto(@Body() produto){
        this.produtoRepository.salvar(produto);
        return produto;
    }

    @Get()
    async listarProdutos(){
        return this.produtoRepository.listar();
    }
}