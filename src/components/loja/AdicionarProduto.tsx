import { useContext, useEffect, useState } from "react"
import { IconPlus } from "@tabler/icons-react"
import Janela from "../template/Janela"
import Botao from "../template/Botao"
import InputFormatado from "../formulario/InputFormatado"
import { Contexto } from "../../pages/contexto/loja"

export default function AdicionarProduto() {
    let [quantidade, setQuantidade] = useState(1)
    let [preco, setPreco] = useState(1.99)
    let { carrinho, setCarrinho } = useContext(Contexto)

    const adicionar = () => {
        let sequencia = carrinho.length + 1;
        const produto = {
            id: sequencia,
            nome: `Produto ${sequencia}`,
            quantidade: quantidade,
            preco: preco,
        };
        setCarrinho((carrinhoAtual: any) => [...carrinhoAtual, produto])
        
    }

    useEffect(() => {
        console.table(carrinho)
    }, [carrinho])

    return (
        <Janela
            titulo="Adicionar Produto"
            cor="bg-purple-700"
        >
            <InputFormatado
                label="Adicionar"
                tipo="number"
                valor={quantidade}
                onInput={(e) => setQuantidade(+e.target.value)}
            ></InputFormatado>
            <InputFormatado
                label="Itens de R$"
                tipo="number"
                valor={preco}
                onInput={(e) => setPreco(+e.target.value)}
            ></InputFormatado>
            <Botao
                cor="bg-green-600"
                icone={<IconPlus />}
                texto="Adicionar"
                onClick={adicionar}
            />
        </Janela>
    );
}
