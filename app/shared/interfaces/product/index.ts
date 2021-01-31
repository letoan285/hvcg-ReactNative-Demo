export interface IProduct {
  id?: number;
  name: string;
  price: any;
  slug?: string;
  image?: string;
  category: number;
  short_description?: string;
  description?: string;
  status?: boolean;
}
