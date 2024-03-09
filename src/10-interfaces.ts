//literal Type
type Sizes  = 'S' | 'M' | 'L' | 'XL';

// type Product = {
//   id: string | number;
//   title: string;
//   createdAT: Date;
//   stock: number;
//   size?: Sizes;
// }
// DIFERENCIAS
// type se puede definir tipos primitivos o directos
// interface se puede definir de todo un cuerpo, no se usa para definir pequeñas,
// se puede extender y hacer herencias
//>>>>>>>>>>>>>>>> Refactorizado con interface
interface Product {
  id: string | number;
  title: string;
  createdAT: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAT: new Date(),
  stock: 10,
  size: 'L'
})

const addProduct = (data: Product) => {
  products.push(data);
}
