import Title from "../title"
import { IBM_Plex_Sans } from 'next/font/google'

const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: "400"
})

export default function KnowAdrenalin() {
    return (
        <div className="w-full space-y-12">
            <div className={ibm.className}>
                <div className="text-gray-500">
                    <Title title="Conheça a Adrenalin" subtitle="Sobre" />
                </div>
            </div>
        </div>
    )
}