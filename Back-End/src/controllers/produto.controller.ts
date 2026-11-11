import express = require("express");
import produtoRepository = require("../repositories/produto.repository");
import type { NovoProduto } from "../repositories/produto.repository";

export function listarProdutos(req: express.Request, res: express.Response){
    const produtos = produtoRepository.listarTodos();
    
    return res.status(200).json(produtos);
}

export function salvarProduto(req:express.Request, res: express.Response){
    const produtoSemId = req.body;
    const novoProduto: NovoProduto = {
        nome:produtoSemId.nome,
        preco:produtoSemId.preco
    }
    const produto = produtoRepository.criar(novoProduto);
    return res.status(201).json(produto);
}

export function buscarPorId(req:express.Request,res:express.Response){
    const uuid = req.params.id;
    const produtoAtualizado = req.body;
    
}