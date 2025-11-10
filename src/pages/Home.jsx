import { Link } from "react-router-dom"

const platforms = [
  { id: "mastersystem", name: "Master System", icon: "/icons/mastersystem.png" },
  { id: "snes", name: "Super Nintendo", icon: "/icons/snes.png" },
  { id: "ps1", name: "PlayStation", icon: "/icons/ps1.png" },
  { id: "n64", name: "Nintendo 64", icon: "/icons/n64.png" },
  { id: "dreamcast", name: "Dreamcast", icon: "/icons/dreamcast.png" },
]

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-2xl text-cyan-300 mb-8 drop-shadow-[0_0_8px_#0ff]">
        Choose your platform
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
        {platforms.map((p) => (
          <Link key={p.id} to={`/platform/${p.id}`} className="group hover:scale-110 transition-transform duration-300">
            <img src={p.icon} alt={p.name} className="w-20 h-20 object-contain drop-shadow-[0_0_8px_#f0f] group-hover:drop-shadow-[0_0_15px_#0ff]" />
            <p className="mt-2 text-xs text-fuchsia-300 group-hover:text-cyan-300">{p.name}</p>
          </Link>
        ))}
        <Link to="/all" className="group hover:scale-110 transition-transform duration-300">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-fuchsia-800 to-cyan-700 text-white text-lg font-bold shadow-[0_0_10px_#0ff] group-hover:shadow-[0_0_20px_#f0f]">
            ALL
          </div>
          <p className="mt-2 text-xs text-fuchsia-300 group-hover:text-cyan-300">All Platforms</p>
        </Link>
      </div>
    </div>
  )
}
