import express = require("express");
import crypto = require("node:crypto");
const router = express.Router(); // Agrupamento de rotas


interface Produto{
    id:string,
    nome:string,
    preco:number
}

const produtosSalvo:Produto[] = [];

router.get("/",(req,res)=>{
    res.status(200).json(produtosSalvo);
});

router.get("/:id",(req,res)=>{
    const uuid = req.params.id;
    const produto = produtosSalvo.find((produto)=> produto.id === uuid);
    if(produto === undefined){return res.status(404).send("Produto do ID: "+uuid+" NÃO ENCONTRADO!")}
    return res.status(200).send(produto);
});

router.post("/",(req,res)=>{
    const produto = req.body;
    const uuid = crypto.randomUUID();
    const novo_produto = {id:uuid,nome:produto.nome,preco:produto.preco}
    produtosSalvo.push(novo_produto );
    console.log(produto)
    res.status(201).json(novo_produto);
});
 

export = router;