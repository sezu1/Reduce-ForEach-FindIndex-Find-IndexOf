let func = () => {
    let numbers3 = [];  
    let nums;

    while(true)  {
        nums = +prompt ('enter value')
        if (isNaN(nums)){ 
        console.log('enter right digit')
        continue;
    } if (nums === 99){
          break; 
    }
    numbers3.push(nums)
    }
 const count = numbers3.reduce((prev)=> {
    return prev + 1
},0)
  console.log(count)  
    }
func()



let functin = () => {
    let num = [];
    let addNum;
     
    while (true){
        addNum = +prompt('Enter your digit')
        if (isNaN(addNum)){
            console.log('enter right digit')
        continue;
        }
        if (addNum === 999) {
            break;
        }
        num.push(addNum)
    }
    let count = num.reduce((prev) => {
        return prev + 1
    },0)
    let sum = num.reduce((prev, item) => {
        return prev+item
    },0)
    console.log(`Количество чисел ${count}, сумма ${sum} `)
}

functin()


const data = [['a', 1], ['b', 2]];
let funciya = () => {
let obj = {}
    for (let i = 0; i<data.length; i++){
    obj[data[i][0]]=data[i][1]
}
console.log(obj)
}
funciya();


const datas = [['a', 1], ['b', 3]];
const obj = datas.reduce((acc, [key, value]) => 
        ({...acc, [key] : value })
, {})
console.log(obj)
