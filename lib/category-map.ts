export const categoryThemeMap: Record<string, {
  displayName: string
  image: string
  description: string
}> = {
  "Aventura": {
    displayName: "Mountain Bike",
    image: "/home/best-products-side-image/trek.jpg",
    description: "Downhill, E-MTB e trilhas radicais",
  },
  "Cozinha": {
    displayName: "Motocross",
    image: "/home/best-products-side-image/quad.jpg",
    description: "Motocross, UTV e Quadriciclos",
  },
  "Tecnologia": {
    displayName: "Surf & Kite",
    image: "/products/pranchaa.png",
    description: "Pranchas, kites e equipamentos aquáticos",
  },
  "Cultura": {
    displayName: "Camping",
    image: "/home/best-products-side-image/camp.jpg",
    description: "Barracas, mochilas e equipamentos outdoor",
  },
  "Praias": {
    displayName: "Snow",
    image: "/products/snow2.png",
    description: "Esportes de neve e aventura no gelo",
  },
  "Natureza": {
    displayName: "Pesca",
    image: "/products/kayak.png",
    description: "Equipamentos de pesca esportiva",
  },
  "História": {
    displayName: "Paraquedismo",
    image: "/products/paraglider.png",
    description: "Voo livre e esportes aéreos",
  },
  "Paisagens": {
    displayName: "Jet Ski",
    image: "/products/jet.png",
    description: "Jet ski e esportes aquáticos radicais",
  },
}

export function mapCategory(category: { id?: number; name?: string; image?: string }) {
  const theme = categoryThemeMap[category.name || ""]
  if (theme) {
    return {
      ...category,
      name: theme.displayName,
      image: theme.image,
    }
  }
  return category
}