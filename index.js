// He tenido que agregarle un numero al nombre de las funciones para que no me de problemas al crear constantes con el mismo nombre
// Pero en esencia todas se llaman como se exige en la prueba "rokket"

// 1. Composite function

const rokket1 = (a) => (b) => (c) => (a * b) * c;

console.log(rokket1(2)(5)(3));
console.log(rokket1(4)(2)(2));
console.log(rokket1(8)(2)(1));


// 2. Longest string

const list = ['best', 'company', 'ever'];

const rokket2 = (list) => list.reduce((a, b) => a.length > b.length ? a : b);

console.log(rokket2(list));


// 3. String repetition

const rokket3 = (a, n) => a.repeat(n);

console.log(rokket3('node', 5)); 
console.log(rokket3('abc', 2));


// 4. Only last names

const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
];

const rokket4 = (contacts) => contacts.map(contact => contact['lastName']);

console.log(rokket4(contacts));


// 5. Unique numbers

const rokket5 = (a, b) => new Set(a.concat(b));

console.log(rokket5([1, 2, 5], [2, 1, 6]));
console.log(rokket5([1, 2, 3], [4, 5, 6]));