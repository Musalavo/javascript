// const names = ['dam','lake','nap'];
// let i = 0;
// while(i<names.length){
//     console.log(names[i]);i++
// }

//  function declaration

// function greet(){
//     console.log ('hey friend');
// }
// greet();


//     function expression
const speak = function(){
    console.log ('hey my friend')
};
speak();
speak();
speak();


//         ARGuMENTS AND PARAMETERS
// const speak = function( name = 'luigi',time = 'night'){
//     console.log(`good${time} ${name}`);
// };
// speak();


//  return value

// const CalcArea = function(radius){
//     return 3.14* radius * radius;
// };
// const area = CalcArea(5);
// console.log(area);


//  arrow function
const CalcArea = (radius) => 3.14 * radius * radius;
const area = CalcArea(10);
console.log (area);

// const greet = () => 'hello world';
// const result = greet();
// console.log(result);

const bill = (products,tax) =>{
    let total = 0;
    for ( let i = 0; i<products.length; i++){
        total += products[i] + products[i]+ tax;
    }
    return total;
};
console.log(bill([10,15,30],0.2));

// more example

const names = 'dan';
// function
const greet = () => 'hello';
let resultone = greet();
console.log(resultone);
// methods
let resulttwo = names.toUpperCase();
console.log(resulttwo);

// callback function foreach

// const myFunc =(callbackFunc)=>{
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };
// myFunc(Function(value){
//     // do something
//     console.log(value);
// });

//  more examples

let people = ['mess','neo','ben','den'];
people.forEach(person => {
    console.log(person);
});

//  getting index in this function
const logPerson = (person,index) => {
    console.log(`${index} -Hello ${person}`);
};
people.forEach(logPerson); 