import { useEffect, useState } from "react"
import PlatformPage from "./PlatformPage"

const platforms = ["mastersystem", "snes", "ps1", "n64", "dreamcast"]

export default function PlatformList() {
  const [visible, setVisible] = useState([platforms[0]])

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setVisible((prev) => {
          const next = platforms[prev.length]
          return next ? [...prev, next] : prev
        })
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="space-y-16">
      {visible.map((id) => <PlatformPage key={id} id={id} />)}
    </div>
  )
}
