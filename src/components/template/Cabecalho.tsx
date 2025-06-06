import { IconPaint, IconX } from "@tabler/icons-react"
import useToggle from "@/data/hooks/useToggle"
import Flex from "./Flex"
import Titulo from "./Titulo"
import SeletorDeCor from "./seletorDeCor"

interface CabecalhoProps {
    titulo?: string;
    subtitulo?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
    const [ mostraSeletor, toogleMostraSeletor ] = useToggle(false)

    return (
        <Flex centerCross className="justify-between">
            {props.titulo ? <Titulo titulo={props.titulo} subtitulo={props.subtitulo} /> :<div></div> }
            <div onClick={toogleMostraSeletor}>
                {mostraSeletor ? <IconX/> : <IconPaint/>}
            </div>
            {mostraSeletor ? <SeletorDeCor/> : ""}
        </Flex>
    );
}
