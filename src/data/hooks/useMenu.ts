import { useContext } from "react"
import ContextoMenu from "../context/MenuProvider"

export default function UseMenu() {
	return useContext(ContextoMenu)
}
