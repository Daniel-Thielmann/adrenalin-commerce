import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const categoryData = [
    { name: "Mountain Bike", image: "/home/best-products-side-image/trek.jpg" },
    { name: "Motocross", image: "/home/best-products-side-image/quad.jpg" },
    { name: "Surf", image: "/products/pranchaa.png" },
    { name: "Camping", image: "/home/best-products-side-image/camp.jpg" },
    { name: "Trekking", image: "/home/best-products-side-image/snow.jpg" },
    { name: "Snow", image: "/products/snow2.png" },
    { name: "Paraquedismo", image: "/products/paraglider.png" },
    { name: "Esportes Aquáticos", image: "/products/jet.png" },
  ];

  const categories: Record<string, number> = {};
  for (const cat of categoryData) {
    const created = await prisma.category.upsert({
      where: { name: cat.name },
      update: { image: cat.image },
      create: { name: cat.name, image: cat.image },
    });
    categories[cat.name] = created.id;
  }

  const products = [
    {
      title: "Specialized Turbo Levo",
      content:
        "E-MTB de alta performance com motor especializado e bateria de longa duração. Ideal para trilhas técnicas e subidas íngremes, oferecendo potência extra sem perder a agilidade. Suspensão total e geometria ajustada para downhill e enduro.",
      image: "/products/turbolevo.png",
      price: 45999.9,
      published: true,
      categoryNames: ["Mountain Bike"],
    },
    {
      title: "Specialized Kenevo",
      content:
        "E-MTB projetada para downhill extremo, com 180mm de curso e motor potente. Perfeita para riders que buscam desempenho máximo em descidas técnicas e terrenos acidentados.",
      image: "/products/kenevo.png",
      price: 52999.9,
      published: true,
      categoryNames: ["Mountain Bike"],
    },
    {
      title: "Honda CRF 450R",
      content:
        "Motocross profissional com motor de 450cc, injeção eletrônica e quadro em alumínio. Desenvolvida para competições de alto nível, oferecendo potência, leveza e controle absoluto nas pistas.",
      image: "/products/crf.png",
      price: 49990.0,
      published: true,
      categoryNames: ["Motocross"],
    },
    {
      title: "KTM 350 SX-F",
      content:
        "Motocross versátil com motor de 350cc e tecnologia de competição. Combina a agilidade de uma 250 com a potência de uma 450. Ideal para pilotos que buscam desempenho equilibrado em qualquer terreno.",
      image: "/products/ktm.png",
      price: 45990.0,
      published: true,
      categoryNames: ["Motocross"],
    },
    {
      title: "Prancha de Surf Performance",
      content:
        "Prancha de surf em epoxy com shape moderno para ondas de médio a grande porte. Construção leve e resistente, ideal para surfistas intermediários e avançados que buscam performance e manobrabilidade.",
      image: "/products/pranchaa.png",
      price: 2899.9,
      published: true,
      categoryNames: ["Surf"],
    },
    {
      title: "Caiaque Explorer 380",
      content:
        "Caiaque inflável premium para expedições em águas calmas e costeiras. Fabricado em material de alta resistência, com compartimentos estanques, assento ajustável e bomba de ar inclusa.",
      image: "/products/kayak.png",
      price: 4599.9,
      published: true,
      categoryNames: ["Esportes Aquáticos"],
    },
    {
      title: "Mochila de Hidratação 15L",
      content:
        "Mochila compacta com reservatório de 2L e compartimentos inteligentes. Projetada para trilhas de bike e corridas em montanha, com sistema de ventilação nas costas e cintas estabilizadoras.",
      image: "/products/mochila.png",
      price: 349.9,
      published: true,
      categoryNames: ["Mountain Bike", "Trekking"],
    },
    {
      title: "Barraca 4 Estações",
      content:
        "Barraca térmica para camping em condições extremas. Estrutura reforçada contra vento e neve, com dupla camada e vedação completa. Capacidade para 2 pessoas com vestíbulo para equipamentos.",
      image: "/products/tent1.png",
      price: 2199.9,
      published: true,
      categoryNames: ["Camping", "Trekking"],
    },
    {
      title: "Barraca Familiar Premium",
      content:
        "Barraca espaçosa para 4 pessoas com montagem rápida. Teto panorâmico, proteção UV e sistema anti-condensação. Perfeita para acampamentos em família e grupos de aventureiros.",
      image: "/products/tent2 - Copia.png",
      price: 2799.9,
      published: true,
      categoryNames: ["Camping"],
    },
    {
      title: "Snowboard All-Mountain Pro",
      content:
        "Snowboard com perfil camber e flex médio para todas as condições de neve. Núcleo de madeira reforçado com fibra de vidro, ideal para pista, backcountry e parque. Tamanho 158cm.",
      image: "/products/snow.png",
      price: 3499.9,
      published: true,
      categoryNames: ["Snow"],
    },
    {
      title: "Bota de Snowboard High-End",
      content:
        "Botas de snowboard com fechamento BOA e forro térmico moldável. Amortecimento responsivo e sola Vibram para máxima tração na neve. Conforto e performance para sessões intensas.",
      image: "/products/snow2.png",
      price: 2199.9,
      published: true,
      categoryNames: ["Snow"],
    },
    {
      title: "Paraglider Asa Termal",
      content:
        "Paraglider de alto desempenho para voos cross-country e térmicos. Envelope em tecnologia shark-nose, linhas de baixo arrasto e design otimizado para estabilidade e planeio prolongado.",
      image: "/products/paraglider.png",
      price: 15990.0,
      published: true,
      categoryNames: ["Paraquedismo"],
    },
    {
      title: "Jet Ski Touring 1300",
      content:
        "Jet ski de turismo com motor 1300cc, assento para três passageiros e sistema de freio inteligente. Ideal para explorar costas, lagos e rios com segurança, estabilidade e muita adrenalina.",
      image: "/products/jet.png",
      price: 89990.0,
      published: true,
      categoryNames: ["Esportes Aquáticos"],
    },
  ];

  for (const product of products) {
    const { categoryNames, ...productData } = product;
    const categoryIds = categoryNames.map((name) => ({ id: categories[name] }));

    await prisma.product.upsert({
      where: { title: productData.title },
      update: {
        ...productData,
        categories: { set: categoryIds },
      },
      create: {
        ...productData,
        categories: { connect: categoryIds },
      },
    });
  }

  await prisma.member.upsert({
    where: { email: "thielmanndan@gmail.com" },
    update: { name: "Daniel Thielmann", role: "Desenvolvedor Full Stack" },
    create: { name: "Daniel Thielmann", role: "Desenvolvedor Full Stack", email: "thielmanndan@gmail.com" },
  });

  await prisma.member.upsert({
    where: { email: "pedro.marques@estudante.ufjf.br" },
    update: { name: "Pedro Marques", role: "Desenvolvedor Backend" },
    create: { name: "Pedro Marques", role: "Desenvolvedor Backend", email: "pedro.marques@estudante.ufjf.br" },
  });

  await prisma.member.upsert({
    where: { email: "maria.silva@email.com" },
    update: { name: "Maria Silva", role: "Designer UX/UI" },
    create: { name: "Maria Silva", role: "Designer UX/UI", email: "maria.silva@email.com" },
  });

  await prisma.member.upsert({
    where: { email: "joao.santos@email.com" },
    update: { name: "João Santos", role: "Gerente de Projeto" },
    create: { name: "João Santos", role: "Gerente de Projeto", email: "joao.santos@email.com" },
  });

  const hashedPassword = await bcrypt.hash("admin123", 10)
  await prisma.user.upsert({
    where: { email: "admin@adrenalin.com" },
    update: {},
    create: {
      email: "admin@adrenalin.com",
      password: hashedPassword,
      name: "Administrador",
      role: "admin",
    },
  })

  console.log("Seed concluído!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });