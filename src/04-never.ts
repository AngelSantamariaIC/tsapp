// never es una alerta de una funcion infinita

const withoutEnd = () => {
  while(true){
    console.log('nunca parar de aprender')
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string'){
    return 'es un string';
  }else if (Array.isArray(input)){
    return 'es un array';
  }
  return fail('not match');
}

console.log(example('hola'));
console.log(example([1,1,2,2,1]));
// console.log(example(1211));
console.log(example('hla despues del fail'));

