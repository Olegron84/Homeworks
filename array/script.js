let amount = +prompt("Введіть кількість елементів масиву:");
// Math.floor(Math.random()*100)
let arr = [];
for(i=0; i<amount; i++){
    arr[i]= Math.floor(Math.random()*100);
}
function sumArray(){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(arr)
console.log(sumArray())
