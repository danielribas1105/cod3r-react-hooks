import InputFormatado from "@/components/formulario/InputFormatado"
import Pagina from "@/components/template/Pagina"
import useStateValidado from "@/data/hooks/useStateValidado"

export default function Senha() {
	function validaSenha(senha: any) {
		let correspondencia = senha.match(/[\d\S]{8,}/)
		return correspondencia?.[0].length === senha.length
	}

	const [senha, setSenha, senhaEValidada] = useStateValidado("", validaSenha)
	let borda

	if (senha === "") {
		borda = "border-none"
	} else if (senhaEValidada) {
		borda = "border-green-600"
	} else if (!senhaEValidada) {
		borda = "border-red-600"
	}

	return (
		<Pagina titulo="Validando Senha" subtitulo="Usando um hook personalizado para validação">
			<InputFormatado
				valor={senha}
				onInput={(e) => setSenha(e.target.value)}
				label="Senha"
				tipo="text"
				className={`${borda} border-4 w-40 flex`}
			/>
		</Pagina>
	)
}
