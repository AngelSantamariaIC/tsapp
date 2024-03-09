import { faker } from '@faker-js/faker';

import {addProduct, products,updateProduct,findProducts,deleteProduct} from './products/product.service';

for (let index = 0;index < 50; index++) {
  addProduct({
  description: faker.commerce.productDescription(),
  imagen: faker.image.urlLoremFlickr(),
  color: faker.color.human(),
  size: faker.helpers.arrayElement(['S' , 'M' , 'L' , 'XL']),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
  tags: ['leather', 'wallet', 'accessory', 'sleek', 'unisex'],
  title: faker.commerce.productName(),
  stock: faker.number.int({ max: 100 }),
  categoryID: faker.string.uuid()
  });

}

console.log(products);

//primer elemento del array
const product = products[0];
updateProduct(product.id,{
  title: 'New title',
  stock: 80
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['as','sa','as']
})
