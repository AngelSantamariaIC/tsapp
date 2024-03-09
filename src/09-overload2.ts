// Angel => [A,n,g,e,l] => string => string []
// [A,n,g,e,l] =>  Angel => string => string []

// tipamos y manejamos la sobrecarga de la funcion, de este modo evitamos la infenrencia de tipo
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string []): string | string[] {
//   if (Array.isArray(input)){
//     return input.join(''); // string
//   }else {
//     return input.split(''); // string[]
//   }
// }

export function parseStr(input: unknown): unknown{
  if (Array.isArray(input)){
    return input.join(''); // string
  }else if (typeof input === 'string'){
    return input.split(''); // string[]
  }else if (typeof input === 'number'){
    return true; // boolen
  }
}


const rtaArray = parseStr('Angel');
console.log('rtaArray','Angel =>',rtaArray)

const rtaStr = parseStr(['A','n','g','e','l']);
console.log('rtaStr',"'A','n','g','e','l' =>",rtaStr)

const rtaNum = parseStr(10);
console.log('rtaNum',"10",rtaNum)
