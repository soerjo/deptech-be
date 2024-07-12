export interface IProduct {
  id: number;
  name: string;
  description: string | null;
  image_url: string | null;
  category: string;
  stock: number;
  categoryCode: string | null;
}

export interface CreateProductDto {
  name: string;
  description: string;
  image_url?: string;
  category: string;
}

export interface UpdateProductDto {
  name: string;
  description: string;
  image_url?: string;
  category: string;
}
