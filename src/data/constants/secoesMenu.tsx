import {
	IconAppWindow,
	IconArrowsLeftRight,
	IconDimensions,
	IconForms,
	IconLetterCase,
	IconLock,
	IconMathGreater,
	IconNumbers,
	IconPin,
	IconRefreshAlert,
	IconSection,
	IconShoppingCart,
	IconUsers,
} from "@tabler/icons-react"

export const secoes = [
	{
		titulo: "Essenciais",
		aberta: false,
		itens: [
			{
				titulo: "Contador",
				url: "/essenciais/contador",
				tag: "useState",
				icone: <IconNumbers />,
			},
			{
				titulo: "Votacao",
				url: "/essenciais/votacao",
				tag: "useState",
				icone: <IconUsers />,
			},
			{
				titulo: "Consulta API",
				url: "/essenciais/consultaAPI",
				tag: "useEffect",
				icone: <IconArrowsLeftRight />,
			},
			{
				titulo: "Maior",
				url: "/essenciais/maior",
				tag: "useEffect",
				icone: <IconMathGreater />,
			},
			{
				titulo: "Contagem de Caracteres",
				url: "/essenciais/contagemCaracteres",
				tag: "useEffect",
				icone: <IconLetterCase />,
			},
			{
				titulo: "State Vs Referência",
				url: "/essenciais/stateVsRef",
				tag: "useRef",
				icone: <IconRefreshAlert />,
			},
			{
				titulo: "Referenciando Elemento",
				url: "/essenciais/refElemento",
				tag: "useRef",
				icone: <IconSection />,
			},
			{
				titulo: "Cont. de Caracteres Ref",
				url: "/essenciais/contagemCaracteresRef",
				tag: "useRef",
				icone: <IconLetterCase />,
			},
		],
	},
	{
		titulo: "Personalizados",
		aberta: false,
		itens: [
			{
				titulo: "Modal",
				url: "/personalizados/modal",
				tag: "personalizados",
				icone: <IconAppWindow />,
			},
			{
				titulo: "Tamanho Janela",
				url: "/personalizados/tamanhoJanela",
				tag: "personalizados",
				icone: <IconDimensions />,
			},
			{
				titulo: "Validando Senha",
				url: "/personalizados/senha",
				tag: "personalizados",
				icone: <IconLock />,
			},
		],
	},
	{
		titulo: "Contextos",
		aberta: false,
		itens: [
			{
				titulo: "Loja",
				url: "/contexto/loja",
				tag: "useContext",
				icone: <IconShoppingCart />,
			},
		],
	},
	{
		titulo: "Outros",
		aberta: true,
		itens: [
			{
				titulo: "Memoizando Elementos",
				url: "/outros/memoizacao",
				tag: "useMemo",
				icone: <IconPin />,
			},
			{
				titulo: "Memoizando Funções",
				url: "/outros/memoizandoFuncoes",
				tag: "useCallback",
				icone: <IconPin />,
			},
			{
				titulo: "Formulário 1",
				url: "/outros/formularioImperativeHandle",
				tag: "useImperativeHandle",
				icone: <IconForms />,
			},
		],
	},
]

export default secoes
