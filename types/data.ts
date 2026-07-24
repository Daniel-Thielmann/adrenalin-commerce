export type Category = {
  id: number;
  name: string;
  image?: string;
  products?: Product[];
};

export type Product = {
  id: number;
  title: string;
  content?: string;
  image?: string;
  published?: boolean;
  price?: number;
  categories?: Category[];
};

export type Member = {
  id: number;
  name: string;
  email: string;
  role: string;
};