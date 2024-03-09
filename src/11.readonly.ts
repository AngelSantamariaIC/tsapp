const number: ReadonlyArray<number> = [1,2,2,2,1];

// con ReadonlyArray no permite las funciones que muten el array
// number.push(1);
// number.pop();
// number.unshift(1);
number.filter(()=>{})
number.map(()=>0)
