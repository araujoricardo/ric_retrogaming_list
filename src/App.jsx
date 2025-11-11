import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "./pages/Home"
import PlatformPage from "./pages/PlatformPage"
import PlatformList from "./pages/PlatformList"

// HEADER RETRÔ COM BOTÃO BACK TO HOME
function Header() {
  const [showHomeButton, setShowHomeButton] = useState(false)

  // Atualiza visibilidade do botão quando muda o hash (função compatível com GitHub Pages)
  useEffect(() => {
    const checkLocation = () => {
      const hash = window.location.hash || "#/"
      const isHome = hash === "#" || hash === "#/" || hash === ""
      setShowHomeButton(!isHome)
    }

    checkLocation()
    window.addEventListener("hashchange", checkLocation)
    return () => window.removeEventListener("hashchange", checkLocation)
  }, [])

  return (
    <header className="flex flex-col items-center py-8 border-b border-fuchsia-500/40 shadow-[0_0_10px_#f0f]">
      <div className="flex justify-between w-full max-w-5xl items-center px-4">
        {showHomeButton ? (
          <Link
            to="/"
            className="text-fuchsia-400 hover:text-cyan-300 text-sm md:text-base font-bold transition-colors"
          >
            🏠 Back to Home
          </Link>
        ) : (
          <div></div>
        )}

        <div className="text-center flex-1">
          <h1 className="text-3xl md:text-4xl tracking-widest text-fuchsia-400 drop-shadow-[0_0_6px_#f0f]">
            🎮 My Favorite Games
          </h1>
          <p className="text-sm text-fuchsia-300/70 mt-2">Retro Collection Explorer</p>
        </div>

        <div className="w-[100px] md:w-[120px]"></div>
      </div>
    </header>
  )
}

// APP PRINCIPAL
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-blue-950 text-white font-arcade relative overflow-hidden">
        {/* Efeito scanlines */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_2px] opacity-20"></div>

        <Header />

        <main className="relative z-10 p-6 md:p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform/:id" element={<PlatformPage />} />
            <Route path="/all" element={<PlatformList />} />
          </Routes>
        </main>

        <footer className="text-center py-4 text-xs text-fuchsia-400/60 relative z-10">
          © {new Date().getFullYear()} — Built with React + Vite + Tailwind
        </footer>
      </div>
    </Router>
  )
}
