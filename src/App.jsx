import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PlatformPage from "./pages/PlatformPage"
import PlatformList from "./pages/PlatformList"

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-blue-950 text-white font-arcade">
        <header className="text-center py-8 border-b border-fuchsia-500/40 shadow-[0_0_10px_#f0f]">
          <h1 className="text-3xl md:text-4xl tracking-widest text-fuchsia-400 drop-shadow-[0_0_6px_#f0f]">
            🎮 My Favorite Games
          </h1>
          <p className="text-sm text-fuchsia-300/70 mt-2">Retro Collection Explorer</p>
        </header>

        <main className="p-6 md:p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform/:id" element={<PlatformPage />} />
            <Route path="/all" element={<PlatformList />} />
          </Routes>
        </main>

        <footer className="text-center py-4 text-xs text-fuchsia-400/60">
          © {new Date().getFullYear()} — Built with React + Vite + Tailwind
        </footer>
      </div>
    </Router>
  )
}
