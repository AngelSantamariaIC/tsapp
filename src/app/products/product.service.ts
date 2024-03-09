import { faker } from '@faker-js/faker';

import { Product } from './product.model';
import { CreateProducDto,UpdateProductDto,FindProductDto } from './product.dto';

export const products: Product[] = [];

//read online
export const addProduct = (data: CreateProducDto): Product =>{
  const newProduct = {
    ... data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category:{
      id: data.categoryID,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

//leer
export const findProducts = (dto: FindProductDto): Product [] => {
 //code
//  dto.color = 'blue'; con readonly protegemos los parametros de busqueda
//  dto.isNew = false;
// dto.tags: [];
// dto.tags?.pop();
// dto.tags?.push();
return products
}

//Actualizar
// podemos acceder al typado por el indice id: Product['id']
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  // explit operation
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

//eliminar
export const deleteProduct = (id: Product['id']): Product | undefined  => {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
  }
  return products[index]
}





// Sabemos cantidad de Stock
export const calcStock = (): number =>{
  let total = 0;
  products.forEach((item)=>{
    total += item.stock;
  });
  return total;
}
