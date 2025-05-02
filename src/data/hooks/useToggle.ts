import { useState } from "react"

export default function useToggle(valor?: boolean) {
    const [ativo, setAtivo] = useState(valor ?? false)

    function toggleAtivo() {
        setAtivo(!ativo)
    }

    const r: [boolean, () => void] = [ativo, toggleAtivo] //tipando o retorno
    return r //semelhante ao useState, retorna a variável e uma função para alterar a variável
}
