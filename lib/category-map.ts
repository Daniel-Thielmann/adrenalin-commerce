import type { Category } from "@/types/data"

export const categoryThemeMap: Record<string, {
  displayName: string
  image: string
  description: string
}> = {
  "Mountain Bike": {
    displayName: "Mountain Bike",
    image: "/home/best-products-side-image/trek.jpg",
    description: "Downhill, E-MTB e trilhas radicais",
  },
  "Motocross": {
    displayName: "Motocross",
    image: "/home/best-products-side-image/quad.jpg",
    description: "Motocross, UTV e Quadriciclos",
  },
  "Surf": {
    displayName: "Surf",
    image: "/products/pranchaa.png",
    description: "Pranchas e equipamentos para surf",
  },
  "Camping": {
    displayName: "Camping",
    image: "/home/best-products-side-image/camp.jpg",
    description: "Barracas, mochilas e equipamentos outdoor",
  },
  "Trekking": {
    displayName: "Trekking",
    image: "/home/best-products-side-image/snow.jpg",
    description: "Trilhas, montanhismo e aventura",
  },
  "Snow": {
    displayName: "Snow",
    image: "/products/snow2.png",
    description: "Esportes de neve e aventura no gelo",
  },
  "Paraquedismo": {
    displayName: "Paraquedismo",
    image: "/products/paraglider.png",
    description: "Voo livre e esportes aéreos",
  },
  "Esportes Aquáticos": {
    displayName: "Esportes Aquáticos",
    image: "/products/jet.png",
    description: "Jet ski, caiaque e navegação radical",
  },
}

export function mapCategory(category: { id: number; name: string; image?: string }): Category {
  const theme = categoryThemeMap[category.name]
  if (theme) {
    return {
      id: category.id,
      name: theme.displayName,
      image: theme.image,
    }
  }
  return {
    id: category.id,
    name: category.name,
    image: category.image,
  }
}