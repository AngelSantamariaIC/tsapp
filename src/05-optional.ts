// Los parametros opcionales deben ir al final

export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    isNew: isNew ?? true, // si envian un valor undefine podemos dejar un valor por defecto
    stock: stock ?? 1 // si envian un valor undefine podemos dejar un valor por defecto
  }
}

// 0 === false
// '' === false
// false === false
// createProduct(1,2,true)

const p1 = createProduct(1,true,12 );
console.log(p1);


const p2 = createProduct(2,false);
console.log(p2);


const p3 = createProduct(3,true,12)
console.log(p3)
