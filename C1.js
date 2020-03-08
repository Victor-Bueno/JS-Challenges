// Crie uma função para verificar se um valor é Truthy

function IsTruthy(value) {
    return(!!value === true);
}

console.log(IsTruthy(true));
console.log(IsTruthy(false));
console.log(IsTruthy(1));
console.log(IsTruthy(0));
console.log(IsTruthy('hey'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function SquarePerimeter(side) {
    return side * 4;
}

console.log(SquarePerimeter(4));
console.log(SquarePerimeter(10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function FullName(First, Last) {
    return (`${First} ${Last}`);
}

console.log(FullName('Victor', 'Bueno'));

// Crie uma função que verifica se um número é par

function IsEven(number) {
    return(number % 2 === 0);
}

console.log(IsEven(9));
console.log(IsEven(10));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function Type(value) {
    return typeof(value);
}

console.log(Type('test'));
console.log(Type(10));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', () => {console.log(FullName('Victor','Bueno'))});