import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const category1 = await prisma.category.create({
    data: {
      name: "Aventura",
      image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098429/blog/paris_vpqrwu.jpg",
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: "Cozinha",
      image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098432/blog/tokyo_fwvu3q.jpg",
    },
  });

  const category3 = await prisma.category.create({
    data: {
      name: "Tecnologia",
      image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098430/blog/new-york_iknp55.jpg",
    },
  });

  const category4 = await prisma.category.create({
    data: {
      name: "Cultura",
      image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098427/blog/berlim_c2lluy.jpg",
    },
  });

  const category5 = await prisma.category.create({
    data: {
      name: "Praias",
      image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098430/blog/sydney_eqz479.jpg",
    },
  });

  const category6 = await prisma.category.create({
    data: {
      name: "Natureza",
      image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098432/blog/ushuaia_dwqits.jpg",
    },
  });

  const category7 = await prisma.category.create({
    data: {
      name: "História",
      image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098427/blog/berlim_c2lluy.jpg",
    },
  });

  const category8 = await prisma.category.create({
    data: {
      name: "Paisagens",
      image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098428/blog/mendoza_atjwdy.jpg",
    },
  });

  await prisma.product.createMany({
    data: [
      {
        title: "Explorando as Maravilhas de Paris",
        content: "Bem-vindo a Paris, a cidade que encapsula a elegância e o encanto de maneira única. Prepare-se para uma jornada inesquecível por essa metrópole fascinante!",
        price: 14500,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098429/blog/paris_vpqrwu.jpg",
      },
      {
        title: "Descobrindo Tokyo",
        content: "Bem-vindo a Tóquio, a cidade que harmoniza tradição e modernidade de maneira única. Prepare-se para uma jornada inesquecível por essa metrópole fascinante!",
        price: 21000,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098432/blog/tokyo_fwvu3q.jpg",
      },
      {
        title: "Inovações Tecnológicas em Nova Iorque",
        content: "Bem-vindo à cidade que nunca dorme, Nova Iorque, onde a energia pulsante e a diversidade cultural se entrelaçam para criar uma experiência única!",
        price: 15000,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098430/blog/new-york_iknp55.jpg",
      },
      {
        title: "A Magia de Sydney",
        content: "Bem-vindo à deslumbrante Sydney, onde a elegância urbana encontra o esplendor natural, formando um cenário verdadeiramente cativante!",
        price: 11000,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098430/blog/sydney_eqz479.jpg",
      },
      {
        title: "Natureza Exuberante em Ushuaia",
        content: "Bem-vindo a Ushuaia, a cidade do fim do mundo, onde a natureza imponente se encontra com a autenticidade de uma comunidade acolhedora!",
        price: 14500,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098432/blog/ushuaia_dwqits.jpg",
      },
      {
        title: "Cultura e História em Berlim",
        content: "Bem-vindo a Berlim, uma cidade que pulsa com história, arte e uma vibrante cena cultural, onde o passado e o presente se entrelaçam de maneira fascinante!",
        price: 13400,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098427/blog/berlim_c2lluy.jpg",
      },
      {
        title: "Encantos de Bali: Natureza e Espiritualidade",
        content: "Bem-vindo a Bali, a ilha dos deuses, onde a espiritualidade, a natureza exuberante e a cultura única se unem para criar um paraíso tropical inesquecível!",
        price: 8900,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098426/blog/bali_duongs.jpg",
      },
      {
        title: "A Vibrante Cidade do México",
        content: "Bem-vindo à Cidade do México, uma metrópole pulsante que combina uma rica herança histórica com uma modernidade vibrante.",
        price: 6500,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098427/blog/cidade-do-mexico_axb3mj.jpg",
      },
      {
        title: "A Magia do Nepal: Vilas e Montanhas",
        content: "Bem-vindo ao Nepal, um país encantador situado no coração do Himalaia, onde as majestosas montanhas se elevam até o céu.",
        price: 14000,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098428/blog/nepal_h2ddo2.jpg",
      },
      {
        title: "Descobrindo a Riqueza Cultural de Machu Picchu",
        content: "Bem-vindo a Machu Picchu, a joia arqueológica dos Andes peruanos, onde a grandiosidade das ruínas incas se encontra com paisagens de tirar o fôlego!",
        price: 9000,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098429/blog/peru_iwrhpb.jpg",
      },
      {
        title: "Bangalore: O Hub Tecnológico da Índia",
        content: "Bem-vindo a Bangalore, a Cidade Jardim da Índia, onde a tradição se encontra com a modernidade.",
        price: 5500,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098427/blog/bangalore_jjgr1c.jpg",
      },
      {
        title: "Mendoza: Vinhedos e Paisagens Andinas",
        content: "Bem-vindo a Mendoza, a pérola dos Andes argentinos, onde vinhedos exuberantes, paisagens deslumbrantes e uma rica cultura se combinam!",
        price: 6000,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098428/blog/mendoza_atjwdy.jpg",
      },
      {
        title: "Copenhague: Encanto Escandinavo",
        content: "Bem-vindo a Copenhague, a encantadora capital da Dinamarca, onde a arquitetura inovadora, a cultura vibrante e a atmosfera acolhedora se combinam!",
        price: 15000,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098433/blog/copenhagen_zf9frj.jpg",
      },
      {
        title: "A Fascinante História de Atenas",
        content: "Bem-vindo a Atenas, o berço da civilização ocidental, onde a história antiga se encontra com o dinamismo moderno!",
        price: 18000,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098426/blog/atenas_kviglq.jpg",
      },
      {
        title: "Riquezas Históricas de Roma",
        content: "Bem-vindo a Roma, a Cidade Eterna, onde a história se desenrola em meio a monumentos imponentes, arte magnífica e uma atmosfera inigualável!",
        price: 12000,
        published: true,
        image: "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098430/blog/rome_fxempf.jpg",
      },
    ],
  });

  const products = await prisma.product.findMany({ take: 15, orderBy: { id: "asc" } });

  await prisma.product.update({ where: { id: products[0].id }, data: { categories: { connect: [{ id: category1.id }, { id: category2.id }] } } });
  await prisma.product.update({ where: { id: products[1].id }, data: { categories: { connect: [{ id: category2.id }] } } });
  await prisma.product.update({ where: { id: products[2].id }, data: { categories: { connect: [{ id: category3.id }, { id: category4.id }] } } });
  await prisma.product.update({ where: { id: products[3].id }, data: { categories: { connect: [{ id: category1.id }, { id: category5.id }] } } });
  await prisma.product.update({ where: { id: products[4].id }, data: { categories: { connect: [{ id: category6.id }, { id: category1.id }] } } });
  await prisma.product.update({ where: { id: products[5].id }, data: { categories: { connect: [{ id: category4.id }, { id: category7.id }] } } });
  await prisma.product.update({ where: { id: products[6].id }, data: { categories: { connect: [{ id: category6.id }, { id: category1.id }] } } });
  await prisma.product.update({ where: { id: products[7].id }, data: { categories: { connect: [{ id: category4.id }, { id: category7.id }] } } });
  await prisma.product.update({ where: { id: products[8].id }, data: { categories: { connect: [{ id: category6.id }, { id: category7.id }] } } });
  await prisma.product.update({ where: { id: products[9].id }, data: { categories: { connect: [{ id: category4.id }, { id: category8.id }] } } });
  await prisma.product.update({ where: { id: products[10].id }, data: { categories: { connect: [{ id: category3.id }] } } });
  await prisma.product.update({ where: { id: products[11].id }, data: { categories: { connect: [{ id: category2.id }, { id: category8.id }] } } });
  await prisma.product.update({ where: { id: products[12].id }, data: { categories: { connect: [{ id: category2.id }, { id: category8.id }] } } });
  await prisma.product.update({ where: { id: products[13].id }, data: { categories: { connect: [{ id: category4.id }, { id: category7.id }] } } });
  await prisma.product.update({ where: { id: products[14].id }, data: { categories: { connect: [{ id: category4.id }, { id: category7.id }] } } });

  await prisma.member.createMany({
    data: [
      { name: "Daniel Thielmann", role: "Desenvolvedor Full Stack", email: "thielmanndan@gmail.com" },
      { name: "Pedro Marques", role: "Desenvolvedor Backend", email: "pedro.marques@estudante.ufjf.br" },
      { name: "Maria Silva", role: "Designer UX/UI", email: "maria.silva@email.com" },
      { name: "João Santos", role: "Gerente de Projeto", email: "joao.santos@email.com" },
    ],
  });

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