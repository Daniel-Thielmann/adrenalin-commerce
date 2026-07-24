const { PrismaClient } = require("@prisma/client");
const p = new PrismaClient();
Promise.all([
  p.product.count(),
  p.category.count(),
  p.member.count(),
  p.user.count(),
]).then(([products, categories, members, users]) => {
  console.log("Products:", products);
  console.log("Categories:", categories);
  console.log("Members:", members);
  console.log("Users:", users);
  p["$disconnect"]();
});