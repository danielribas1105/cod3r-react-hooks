import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function ContagemCaracteres() {
    const [quantidadeCaracteres, setQuantidadeCaracteres] = useState(400)
    const [caracteresRestantes, setCaracteresRestantes] = useState(quantidadeCaracteres)
    const [texto, setTexto] = useState('')

    useEffect(() => {
        let timer = setTimeout(() => {
            let aux = quantidadeCaracteres - texto.length
            setCaracteresRestantes(aux)
        }, 500)
        return () => (clearTimeout(timer)) //função de limpeza, é executada antes de useEffect ser chamado novamente
    }, [texto])

    return (
        <Pagina titulo="Contagem de caracteres" subtitulo="Entendendo as funções de limpeza">
            <Display texto="Digite o texto:" textoComplementar={`${caracteresRestantes} caracteres restantes`}/>
            <textarea 
                value={texto} 
                onInput={(e) => setTexto(e.currentTarget.value)} 
                className={`border border-zinc-700 bg-zinc-700 text-white text-2xl w-3/5 h-72 rounded p-5`}>
            </textarea>
        </Pagina>
    )
}