import { Product } from "./product.model";

// omit  omitir campos
// extens creamos una atributo que no tiene product
export interface CreateProducDto extends Omit <Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryID: string;
}
// adicionar
// opuesto a ommit
type example = Pick<Product, 'color' | 'description'>

// crea opcional todos los tributos
//CreateProducDto, ya tienes las caracteriscias que omiten los campos que no necesitamos
export interface UpdateProductDto extends Partial<CreateProducDto>{

}

// adicionar
// opuesto a partial
type example2 = Required<Product>

// restringimos todas las formas de mutar un array
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>;
}

// type example3 = Readonly<Product>;
