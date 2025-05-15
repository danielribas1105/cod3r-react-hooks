import { useId } from "react"
import Pagina from "@/components/template/Pagina"
import Flex from "@/components/template/Flex"

export default function FormularioId1() {
    let id = useId()

    return (
        <Pagina titulo="Conhecendo o hook usedId" subtitulo="Usando useId em um formulário">
            <Flex center>
                <label className="m-1" htmlFor={`nome-${id}`}>Nome:</label>
                <input id={`nome-${id}`} className="m-2 text-gray-600 p-2 rounded-md" type="text"></input>
            </Flex>
            <Flex center>
                <label className="m-1" htmlFor={`sobrenome-${id}`}>Sobrenome:</label>
                <input id={`sobrenome-${id}`} className="m-2 text-gray-600 p-2 rounded-md" type="text"></input>
            </Flex>
        </Pagina>
    )
}