(()=> {
const prices: (number | string)[]= [1,2,3,4,5,6,2]

// tipamos una tupla
let user: [string, number] ;
user = ['angelbyte',15];


// crear una tupla con variables
user = ['angel',25];
const [username, age] = user;

console.log(username);
console.log(age)


})();
