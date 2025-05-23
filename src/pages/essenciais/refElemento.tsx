import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRef } from "react";

export default function RefElemento() {
    const referencia = useRef<any>()

    function Apagar() {
        //referencia.current = <p>
        referencia.current.innerText = referencia.current.innerText.slice(0, -1)
    }

    return (
        <Pagina titulo="Referenciando um elemento" subtitulo="Usando referências na DOM">
            <Flex col center>
                <p ref={referencia} className="text-4xl text-gray-300 m-4">Texto Legal!</p>
                <Botao redondo tamanho="2xl" cor="bg-sky-500" icone={<IconArrowLeft/>} onClick={Apagar}/>
            </Flex>
        </Pagina>
    )
}