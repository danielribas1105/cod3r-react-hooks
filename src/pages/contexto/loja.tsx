import { createContext, useState } from "react"
import Pagina from "@/components/template/Pagina"
import Flex from "@/components/template/Flex"
import AdicionarProduto from "@/components/loja/AdicionarProduto"
import FinalizarCompra from "@/components/loja/FinalizarCompra"
import Carrinho from "@/components/loja/Carrinho"

export let Contexto = createContext({} as any)

export default function Loja() {
    const [ carrinho, setCarrinho ] = useState<any>([])
    const ctx = { carrinho, setCarrinho, 
        total(){
        const r = carrinho.reduce((acc: any, produto: any) => acc + (+produto.quantidade * +produto.preco), 0)
        return r 
        } 
    }

    return (
        <Contexto.Provider value={ctx}>
            <Pagina titulo="Loja" subtitulo="Compartilhando informações entre múltiplos componentes com contexto">
                <Flex col gap={4}>
                    <Flex gap={4}>
                        <AdicionarProduto/>
                        <FinalizarCompra/>
                    </Flex>
                    <Carrinho/>
                </Flex>
            </Pagina>
        </Contexto.Provider>
    )
}