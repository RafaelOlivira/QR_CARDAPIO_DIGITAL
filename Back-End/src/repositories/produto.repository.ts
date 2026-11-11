import crypto = require("node:crypto");
export interface Produto{
    id: string;
    nome: string;
    preco: number;
};
export type NovoProduto = Omit<Produto, "id">;

const produtosSalvos: Produto[] = [];

export function listarTodos(): Produto[]{
    return produtosSalvos;    
}

export function criar(dados: NovoProduto): Produto {
    const novoProduto: Produto = {
        id: crypto.randomUUID(),
        nome: dados.nome,
        preco: dados.preco
    }
    produtosSalvos.push(novoProduto);
    return novoProduto;
}

export function buscarPorId(id:string,prodAtualizado:Produto): Produto{


}