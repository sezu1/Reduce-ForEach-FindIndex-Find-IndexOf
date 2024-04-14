
//Task1

let count = 0;

let inputNum = +prompt ('Введите число');

while(inputNum !== 99){
    inputNum = +prompt ('Введите число');
    count++
}
console.log(count);



//Task2

let counter = 0;
let sum = 0;

let inputs = +prompt('Введите число 999');

while (inputs !== 999){
    counter++
    sum = sum + inputs
    inputs = +prompt('Введите число 999');
  
}
console.log(`было введено ${counter}, а их сумма ${sum}`);



//Task3

const data = [['a', 1], ['b', 2]];

let funciya = () => {
let obj = {}
    for (let i = 0; i<data.length; i++){
    obj[data[i][0]]=data[i][1]
}
console.log(obj)
}
funciya();



//Task4

const datas = [['a', 1], ['b', 3]];
const obj = datas.reduce((acc, [key, value]) => 
        ({...acc, [key] : value })
, {})
console.log(obj)
