// function declaration
function addnumbers(a,b){
    return a + b;
}
console.log(addnumbers(9,8));

// function expression
// const addnumbers = function(a,b){
//     return a+b;
// };
// console.log(addnumbers(7,8));

// if /else
let num =-5;
if(num>0){
console.log('the number is a positive number');
} 
else if(num<0){
    console.log('its an negative number');
}
else{
    console.log('its a zero')
}

// loop
let numbers = [ 1,2,3,4,5];
for(let i = 0;i<numbers.length;i++){
    console.log(numbers[i]);
}