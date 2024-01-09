import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const produtos = [
    { name: 'Pipoca Pequena', tipo: 'Comida', preco: '8.00', published: true },
    { name: 'Pipoca Média', tipo: 'Comida', preco: '12.00', published: true },
    { name: 'Pipoca Grande', tipo: 'Comida', preco: '15.00', published: true },
    { name: 'Refrigerante Pequeno', tipo: 'Bebida', preco: '5.00', published: true },
    { name: 'Refrigerante Médio', tipo: 'Bebida', preco: '8.00', published: true },
    { name: 'Refrigerante Grande', tipo: 'Bebida', preco: '10.00', published: true },
    { name: 'Chocolate', tipo: 'Doce', preco: '6.00', published: true },
    { name: 'Cachorro-Quente', tipo: 'Comida', preco: '10.00', published: true },
    { name: 'Nachos com Queijo', tipo: 'Comida', preco: '12.00', published: true },
    { name: 'Água Mineral', tipo: 'Bebida', preco: '4.00', published: true },
  ];

  // Inserir produtos no banco de dados
  for (const produto of produtos) {
    await prisma.produto.create({ data: produto });
  }

  console.log('Seeds executados com sucesso!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
