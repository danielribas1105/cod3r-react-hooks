import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function StateVsRef() {
    const [estado, setEstado] = useState(0) //retorna um array com uma variável e uma função para alterar essa variável
    const referencia = useRef(0) //retorna um objeto, com uma propriedade current (não faz com que uma nova renderização aconteca), é utilizado para atualizar informações que não são mostradas na tela, ou seja, dados que não serão renderizados

    function incrementaReferencia() {
        referencia.current = referencia.current + 1
    }

    return (
        <Pagina titulo="Referência Vs State" subtitulo="Entendendo useRef">
            <Display texto={`R: ${referencia.current} | S: ${estado}`}/>
            <Flex gap={5}>
                <Botao redondo tamanho="2xl" cor="bg-pink-500" texto="R+" onClick={() => incrementaReferencia()}/>
                <Botao redondo tamanho="2xl" cor="bg-green-500" texto="S+" onClick={() => setEstado(estado + 1)}/>
            </Flex>
        </Pagina>
    )
}