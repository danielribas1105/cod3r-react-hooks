import { useState } from "react"

export default function useBoolean(valor?: boolean) {
    const [ativo, setAtivo] = useState(valor ?? false)

    function toggleAtivo() {
        setAtivo(!ativo)
    }

    function miniTrue() {
        setAtivo(true)
    }

    function miniFalse() {
        setAtivo(false)
    }

    const r: 
        [boolean, () => void, () => void, () => void] = 
        [ativo, toggleAtivo, miniTrue, miniFalse] //tipando o retorno
    return r //semelhante ao useState, retorna a variável e uma função para alterar a variável
}
