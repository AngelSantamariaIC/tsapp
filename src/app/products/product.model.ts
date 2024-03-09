import { BaseModel } from "../base.model";
import { Category } from "../categories/category.models";


export type Sizes = 'S' | 'M' | 'L' | 'XL';

// Ejemplo concepto de Herencia
export interface Product extends BaseModel {
  description: string;
  imagen: string;
  color: string;
  size?: Sizes;
  price: number;
  isNew: boolean;
  stock: number;
  tags: string[];
  title: string;
  category: Category;
}

