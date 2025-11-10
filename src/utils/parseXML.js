export async function parseXML(xmlPath) {
  const res = await fetch(xmlPath)
  const text = await res.text()
  const xml = new DOMParser().parseFromString(text, "application/xml")

  const base = import.meta.env.BASE_URL
  const platformFolder = xmlPath.split("/platforms/")[1]?.split("/")[0] ?? ""

  const fixPath = (p) => {
    if (!p) return ""
    if (p.startsWith("http")) return p
    if (p.startsWith("./")) p = p.slice(2)
    if (p.startsWith("/")) p = p.slice(1)
    return `${base}platforms/${platformFolder}/${p}`.replace(/\/+/g, "/")
  }

  return Array.from(xml.querySelectorAll("game")).map((g) => ({
    id: g.getAttribute("id"),
    title: g.querySelector("name")?.textContent ?? "Untitled",
    image: fixPath(g.querySelector("image")?.textContent ?? ""),
    video: fixPath(g.querySelector("video")?.textContent ?? ""),
  }))
}
