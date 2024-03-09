// Angel => [A,n,g,e,l] => string => string []
// [A,n,g,e,l] =>  Angel => string => string []


//sobrecarga de funciones solo se puede con function
function parseStr(input: string | string []): string | string[] {
  if (Array.isArray(input)){
    return input.join(''); // string
  }else {
    return input.split(''); // string[]
  }
}

// inferencia de tipos
// rtaArray.reverse();
const rtaArray = parseStr('Angel');
if (Array.isArray(rtaArray)){
  rtaArray.reverse();
}
console.log('rtaArray','Angel =>',rtaArray)

// inferencia de tipos
const rtaStr = parseStr(['A','n','g','e','l']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string'){
  rtaStr.toLowerCase();
}
console.log('rtaStr',"'A','n','g','e','l' =>",rtaStr)
