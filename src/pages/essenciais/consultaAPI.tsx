import { useEffect, useState } from "react"
import Pagina from "@/components/template/Pagina"

export default function ConsultaAPI() {
	const [url, setUrl] = useState()

	//é usado para executar uma função em determinados pontos
	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then(resp => resp.json())
			.then(obj => setUrl(obj.message))
	}, []) //no array vão as variáveis que devemos monitorar. Quando array é vazio, a função só é executada quando o componente é renderizado

	return (
		<Pagina titulo="Requisição a API" subtitulo="Requerindo dados">
			<img className="max-w-sm" src={url}></img>
		</Pagina>
	)
	
}
