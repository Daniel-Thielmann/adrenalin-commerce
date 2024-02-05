export type Category = {
  id?: number;
  name?: string;
  products?: Product[];
};

export type Product = {
  id?: number;
  title?: string;
  content?: string;
  image?: string;
  published?: boolean;
  categories?: Category[];
  price?: number;
};

export type IndividualProduct = {
  id?: number;
  title?: string;
  content?: string;
  image?: string;
  published?: boolean;
  categories?: Category[];
  price?: number;
} | null;

export type Member = {
  id?: number;
  name?: string;
  email?: string;
  role?: string;
};
