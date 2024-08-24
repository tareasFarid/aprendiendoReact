const list = [];
const anotherList = list.concat(157);

const persona = {
    name: 'Faarid',
    lastName: 'Paredes',
    age: 25,
    json: {
        prueba1: 'prueba1',
        prueba2: 'prueba2',
    }
}

const sumar = (operador1, operador2)=>{
    console.log(operador1);
    console.log(operador2);
    return operador1 + operador2
}

console.log(sumar(2, 2));