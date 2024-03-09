let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toupperCase();


// permite flexibilidad y validacion del tipo de variable
let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];

// unknowVar.doSomething();
// unknowVar.toupperCase();

// validamos la variable para usar lo metodos de string
if (typeof unknowVar == 'string'){
  unknowVar.toUpperCase();
}
if (typeof unknowVar == 'boolean'){
  let insNew2: boolean = unknowVar;
}

const parse = (str: string): unknown =>{
  return JSON.parse(str);
}

