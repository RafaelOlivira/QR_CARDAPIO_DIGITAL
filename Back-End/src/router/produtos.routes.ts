import express = require("express");
import produtoController = require("../controllers/produto.controller");
const router = express.Router(); // Agrupamento de rotas


interface Produto{
    id:string,
    nome:string,
    preco:number
}

const produtosSalvo:Produto[] = [];

router.get("/", produtoController.listarProdutos);

router.get("/:id",(req,res)=>{
    const uuid = req.params.id;
    const produto = produtosSalvo.find((produto)=> produto.id === uuid);
    if(produto === undefined){return res.status(404).send("Produto do ID: "+uuid+" NÃO ENCONTRADO!")}
    return res.status(200).send(produto);
});

router.post("/",produtoController.salvarProduto);
 
router.put("/:id",(req,res)=>{
    const uuid = req.params.id;
    const prodAtualizado = req.body;
    const produto = produtosSalvo.find((produto)=>{
        return produto.id === uuid;
    });
    if(produto === undefined){return res.status(404).send("Produto não existe")};
    produto.nome = prodAtualizado.nome;
    produto.preco = prodAtualizado.preco;
    return res.status(200).json(produto);
});

router.delete("/:id",(req,res)=>{
    const uuid = req.params.id;

    const produtoBuscado = produtosSalvo.find((produto) =>{return produto.id === uuid});
    if(produtoBuscado === undefined){return res.status(404).send("Produto do ID: "+uuid+" NÃO ENCONTRADO!")};

    const posicaoProduto = produtosSalvo.findIndex((produto)=>{
        return produto === produtoBuscado;
    });
    produtosSalvo.splice(posicaoProduto,1);
    return res.status(200).json({
        produtoBuscado,
        "DELETE":true
    })

});

export = router;