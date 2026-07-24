export function formatCurrency(value: number | undefined | null): string {
  if (value == null) return "R$ 0,00"
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}