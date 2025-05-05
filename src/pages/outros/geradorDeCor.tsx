import { useLayoutEffect, useRef, useState } from "react"
import useBoolean from "@/data/hooks/useBoolean"
import Pagina from "@/components/template/Pagina"
import Flex from "@/components/template/Flex"
import Display from "@/components/template/Display"
import Botao from "@/components/template/Botao"

export default function GeradorDeCor() {
    //1 - mostrar a div condicionalmente
    //2 - exibir texto no display: "Clique em sortear" ou "Cor aleatoria"
    //3 - alterar a cor da div de acordo com a cor sorteada
    const [mostrar, toggleMostrar, mostrarTrue, mostrarFalse] = useBoolean(false)
    const [texto, setTexto] = useState("Clique em sortear cor")
    const ref = useRef<any>()

    function gerarCorAleatoria() {
        const numeroAleatorioHexadecimal = Math.floor(Math.random() * 0xffffff)
        const cor = numeroAleatorioHexadecimal.toString(16)
        return cor
    }

    useLayoutEffect(() => {
        if(mostrar) {
            const cor = gerarCorAleatoria()
            setTexto(`#${cor}`)
            ref.current.style.backgroundColor = `#${cor}`
        }else{
            setTexto("Clique em sortear cor")
        }
    }, [mostrar])

    return (
        <Pagina titulo="Gerador de cor" subtitulo="Criando exemplos mais complexo com o useLayoutEffect">
            <Flex>
                <Botao texto="Sortear Cor" onClick={mostrarTrue}/>
                <Botao texto="Apagar Cor" onClick={mostrarFalse}/>
            </Flex>
            <Display texto={texto}/>
            {mostrar ? (
                <div ref={ref} className="h-32 w-32"></div>
            ) : (
                ""
            )}
        </Pagina>
    )
}