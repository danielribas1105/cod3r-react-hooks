import Pagina from "@/components/template/Pagina";
import { useLayoutEffect, useState } from "react";

export default function Texto() {
    const [texto, setTexto] = useState("Texto secreto!!!!!!!")

    useLayoutEffect(() => {
        setTexto("Olá!")
    }, []) //as ações do useEffect acontecem depois do carregamento do componente

    return (
        <Pagina titulo="Texto secreto" subtitulo="Entendendo um problema do useEffect">
            <p className="text-5xl text-gray-300">
                {texto}
            </p>
        </Pagina>
    )
}