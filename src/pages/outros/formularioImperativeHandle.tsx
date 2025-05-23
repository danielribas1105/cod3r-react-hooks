import InputComReferencia from "@/components/formulario/InputComReferencia"
import Botao from "@/components/template/Botao"
import Flex from "@/components/template/Flex"
import Pagina from "@/components/template/Pagina"
import { useRef } from "react"

export default function FormImperativeHandle() {
	const referencia = useRef<any>()

	function apagar() {
		referencia.current.apagar()
	}

	function padrao() {
		referencia.current.textoPadrao()
	}

	return (
		<Pagina titulo="Modificando uma Referência" subtitulo="Usando useRef e useImperativeHandle">
			<Flex col center>
				<InputComReferencia tipo="texto" label="Digite o texto" ref={referencia} />
				<Flex center>
					<Botao texto="Apagar" onClick={apagar}></Botao>
					<Botao texto="Padrão" onClick={padrao}></Botao>
				</Flex>
			</Flex>
		</Pagina>
	)
}
