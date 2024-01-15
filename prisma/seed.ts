import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const membrosData = [
    { name: "Áurea Cunha Prado", email: "aurea.prado@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Breno Furtado Rosado", email: "breno.furtado@codejr.com.br", cargo: "Assessor", published: true },
    { name: "João Victor Dias", email: "joaovictor.dias@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Rayssa Amaral Gomes", email: "rayssa.amaral@codejr.com.br", cargo: "Diretor", published: true },
    { name: "Carlos Eduardo de Souza Mattos", email: "carloseduardo.souza@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Marlon Ruffo Nascimento", email: "marlon.ruffo@codejr.com.br", cargo: "Gerente", published: true },
    { name: "João Paulo Macedo Fernandes", email: "joaopaulo.macedo@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Lucas Henrique Arruda", email: "lucas.arruda@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Felipe Gotelip Delgado", email: "felipe.gotelip@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Gabriel de Oliveira Vieira", email: "gabriel.vieira@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Quezia Emanuelly da Silva Oliveira", email: "quezia.emanuelly@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Ricardo Ervilha Silva", email: "ricardo.ervilha@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Vitoria Nunes", email: "vitoria.nunes@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Hugo Nogueira Carvalho", email: "hugo.carvalho@codejr.com.br", cargo: "Vice-presidente", published: true },
    { name: "Davi Almeida Pacheco", email: "davi.pacheco@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Leandro Alvares de Carvalho", email: "leandro.alvares@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Sara Ingrid Sousa Oliveira Afonso", email: "sara.souza@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Letícia Quintão Costa", email: "leticia.quintao@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Felipe Lima Nogueira", email: "felipe.nogueira@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Daniel Alves Thielmann", email: "daniel.thielmann@codejr.com.br", cargo: "Assessor", published: true },
    { name: "João Pedro Nascimento", email: "joaopedro.nascimento@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Saulo de Tarso Romano Surerus", email: "saulo.tarso@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Taynara Carlos Ferraz", email: "taynara.carlos@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Felipe Souza Magalhães Sant'Anna", email: "felipe.santanna@codejr.com.br", cargo: "Diretor", published: true },
    { name: "Pedro Henrique Pascoalino Marques", email: "pedro.marques@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Lucas Gonçalves Rocha", email: "lucas.goncalves@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Paulo Aquino", email: "paulo.aquino@codejr.com.br", cargo: "Assessor", published: true },
    { name: "Emmanuel Gomes Nassif", email: "emmanuel.nassif@codejr.com.br", cargo: "Diretor", published: true },
    { name: "Fabio do Vale Affonso", email: "fabio.vale@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Gabriel de Faria Salles", email: "gabriel.faria@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Rhara Ianna Barcelos Costa", email: "rhara.ianna@codejr.com.br", cargo: "Diretor", published: true },
    { name: "Carlos Gustavo Ferreira Rezende", email: "carlos.gustavo@codejr.com.br", cargo: "Gerente", published: true },
    { name: "Davi Kirchmaier Paiva", email: "davi.kirchmaier@codejr.com.br", cargo: "Presidente", published: true },
    { name: "Felipe de Oliveira Souza", email: "felipe.souza@codejr.com.br", cargo: "Assessor", published: true },
    { name: "João Vitor Fernandes Ribeiro Carneiro Ramos", email: "joaovitor.fernandes@codejr.com.br", cargo: "Gerente", published: true },
  ];

  for (const membro of membrosData) {
    await prisma.membro.create({
      data: membro,
    });
  }

  await prisma.$disconnect();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });