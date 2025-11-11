export async function parseXML(xmlPath) {
  const res = await fetch(xmlPath);
  const text = await res.text();
  const xml = new DOMParser().parseFromString(text, "application/xml");

  // Detecta base pública real (funciona no GH Pages e local)
  const base = import.meta.env.BASE_URL.startsWith("/")
    ? import.meta.env.BASE_URL
    : `/${import.meta.env.BASE_URL}`;

  // Garante prefixo sem duplicar /#/ no caminho
  const cleanBase = base.replace(/#.*$/, "").replace(/\/+$/, "");

  // Pega o nome da plataforma a partir do caminho do XML
  const platformFolder = xmlPath.split("/platforms/")[1]?.split("/")[0] ?? "";

  // Corrige caminho relativo do XML → caminho público completo
  const fixPath = (p) => {
    if (!p) return "";
    if (p.startsWith("http")) return p; // Vimeo etc.
    if (p.startsWith("./")) p = p.slice(2);
    if (p.startsWith("/")) p = p.slice(1);
    return `${cleanBase}/platforms/${platformFolder}/${p}`.replace(/\/+/g, "/");
  };

  // Mapeia os jogos
  const games = Array.from(xml.querySelectorAll("game")).map((g) => ({
    id: g.getAttribute("id"),
    title: g.querySelector("name")?.textContent ?? "Untitled",
    image: fixPath(g.querySelector("image")?.textContent ?? ""),
    video: fixPath(g.querySelector("video")?.textContent ?? ""),
  }));

  // Log de debug (para confirmar o path gerado)
  console.log("🧩 Parsed", platformFolder, games[0]?.image, games[0]?.video);

  return games;
}
