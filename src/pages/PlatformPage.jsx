import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { parseXML } from "../utils/parseXML"
import GameCard from "../components/GameCard"

export default function PlatformPage({ id: propId }) {
  const { id: routeId } = useParams()
  const id = propId || routeId
  const [games, setGames] = useState([])

  useEffect(() => {
    if (!id) return
    const xmlPath = `${import.meta.env.BASE_URL}platforms/${id}/gamelist.xml`
    parseXML(xmlPath).then(setGames).catch(console.error)
  }, [id])

  return (
    <section>
      <h2 className="text-2xl md:text-3xl mb-6 text-center text-cyan-300 tracking-widest drop-shadow-[0_0_8px_#0ff]">
        {id?.toUpperCase()} — {games.length} titles
      </h2>
      <div className="grid grid-cols-7 gap-4 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 max-[480px]:grid-cols-1">
        {games.map((g) => <GameCard key={g.id} {...g} />)}
      </div>
    </section>
  )
}
