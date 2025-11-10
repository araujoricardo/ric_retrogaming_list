import { useRef, useState } from "react"

export default function GameCard({ title, image, video }) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef(null)

  const handleEnter = () => {
    setHovered(true)
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }

  const handleLeave = () => {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-fuchsia-700/40 bg-black/40 hover:border-fuchsia-400 transition-all duration-300 shadow-[0_0_10px_#000_inset] cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => alert(`Details screen for ${title} coming soon!`)}
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-auto transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}
      />
      <video
        ref={videoRef}
        src={video}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        loop
        preload="none"
        controls={false}
      />
      <div className="absolute bottom-0 w-full bg-black/70 text-center py-1 text-xs text-fuchsia-300 font-semibold truncate">
        {title}
      </div>
    </div>
  )
}
