import { createContext, useEffect, useState } from "react"
import secoesMenu from "../constants/secoesMenu"
import useBoolean from "../hooks/useBoolean"
import useTamanhoJanela from "../hooks/useTamanhoJanela"
import { useRouter } from "next/router"
import { MenuSecao } from "../models/MenuSecao"

const ContextoMenu = createContext({} as any)

export function MenuProvider(props: any) {
	const [mini, toggleMini, miniTrue, miniFalse] = useBoolean(false)
	const [secoes, setSecoes] = useState<any>(secoesMenu)
	let tamanho = useTamanhoJanela()
	const router = useRouter()

	useEffect(() => {
		if (tamanho === "md" || tamanho === "sm") {
			miniTrue()
		} else {
			miniFalse()
		}
	}, [tamanho])

	useEffect(() => {
		setSecoes(() => selecionarItem(router.asPath))
	}, [router.asPath])

	function alternarSecao(secaoSelecionada: MenuSecao) {
		let novasSecoes = secoes.map((secao: any) => {
			if (secao.titulo === secaoSelecionada.titulo) {
				return { ...secao, aberta: !secao.aberta }
			} else {
				return secao
			}
		})
		setSecoes(() => novasSecoes)
	}

	function selecionarItem(url: string) {
		let novasSecoes = secoes.map((secao: any) => {
			let novosItens = secao.itens.map((item: any) => {
				return { ...item, selecionado: item.url === url }
			})
			return { ...secao, itens: novosItens }
		})
		return novasSecoes
	}

	const ctx = { secoes, mini, toggleMini, alternarSecao }
	return <ContextoMenu.Provider value={ctx}>{props.children}</ContextoMenu.Provider>
}

export default ContextoMenu
