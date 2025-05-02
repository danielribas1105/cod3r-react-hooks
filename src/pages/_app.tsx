import type { AppProps } from "next/app"
import { TemaProvider } from "@/data/context/TemaProvider"
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TemaProvider>
            <Component {...pageProps} />
        </TemaProvider>
    )
}
