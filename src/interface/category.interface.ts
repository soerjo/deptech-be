export interface ICategory {
  code: string;
  name: string;
  description?: string;
}

export interface CreateCategoryDto {
  code: string;
  name: string;
  description?: string;
}

export interface UpdateCategoryDto {
  name: string;
  description?: string;
}
