// /*console.log('HELLO WORLD');
// let t = 5;
// let m = 8;
// let k = 3;
// result = t + m / k;
// console.log(result);
// console.log('what is your name') ;
// //console.log(name)
// console.log('the date');
// let year = 2019;
// let age = 5;
// console.log(year,age)
// console.log('helo,world');
// let email = 'mario@gmail.com';
// console.log(email);

// // incanation means joining

// let firstname = 'musaa';
// let secondname = 'lavoo';
// let fullname = firstname +' '+ secondname;
// console.log(fullname);

// // getting characters

// console.log(fullname[9]);
// //string length
// console.log(fullname.length);

// //string method

// console.log(fullname.toUpperCase());
// let result = fullname.toLowerCase();
// console.log(result)
// //let index = email.indexOf('@');
// let index = email.indexOf('@');
// console.log(index)
// let k = email.lastIndexOf('i');
// console.log(k);

// //slicer

// let g = email.slice(5);
// console.log(g);
// let q = email.substring(4,6);
// console.log(q);

// //replacing

// let b = email.replace('mario','mumbai');
// console.log(b);
// const title = 'Best read of 2019';
// const author ='mario';
// const likes  =30;

// // by cancational method

// //results = 'The blog called ' + title + ' by ' + author + ' has '+ likes + ' likes ';
// //console.log(results);
// //template string method
// result =  `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// //using html method

// let html = `
// <h2> ${title}</h2>
// <p> ${author}</p>
// <pan> This Blog has ${likes} likes </pan>
// `;

// //arrays

// console.log(html);
// let ninjas = ['boys','gals','codes'];
// ninjas[1] = 'programmer'; //rewritting string array 
// console.log(ninjas[1]);*/

// //integers array

// let ages = [1,4,7,9,8];
// //ages[2]=[14]; // rewritting an array
// //console.log(ages[2]);
// //let results = ages.join('=');// this replace , with =
// //let results = ages.indexOf(4); // this gets the position 4 w/c is 1 js is a zero language.
// //let results = ages.concat([8,65]); // this add new values to the array
// let results = ages.push('2');
// console.log(results);
// // let m = 'mario';
// // console.log(m);
// // console.log('the date');
// // let year = 2019;
// // let age = 5;
// // console.log(year,age)
// // let all = year + ' '+age;
// // console.log(all);
// // let age = null;
// // console.log(age,age + 3,`the age is ${age}`);
// let email = 'lavo@gmail.com'
// // let results = email.includes('@');
// // let names = [ 'dan','masi','kells'];
// // results = names.includes('bob');
// // // console.log(results);
// // let age = 25;
// // console.log (age ==25);
// // console.log (age ==30);
// // console.log (age !=56); //this is for not(if age is not(!)equall to 56)
// // console.log (age >15);
// // boolean in strings
// let name = 'dan';
// // console.log(name == 'dan');
// let age = 25;
// console.log(age == '25'); // comparison between 2 data type ie integer and string.
// strict comparison
// let age = 25;
// console.log(age==='25'); // this means integer to integer of exact figure or string to string of the same value
// console.log(age===25);
// let score = '100'; // lets convert this to number type
// score = Number(score); // this is how its converted to integer
// // console.log(score + 1);
// let score = String(50); //to string
// console.log(score);
// console.log(typeof score);
// typeof function is use to check datatype being int or string etc

// LOOPS

// for ( i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }
// console.log('loop is finished');
// const names = ['mark','ken','Deo'];
// for (let i = 0; i < names.length; i++){
//     let html = `<div>${names[i]}</div>`;
// console.log(t=html);
// }

// While loop

// let i = 0;
// while (i < 5){
//     console.log('in loop of :', i);
//     i++;
// }
// const names = ['mark','ken','Deo'];
// let i = 0;
// while ( i < names.length){
//     console.log(names[i]);
//     i++;
// }

// do while loop

// let i = 0;
// do{
//     console.log('The val of i is: ' ,i);
//     i++;
// }while(i<5);

// if statement

// let age = 56;
// if (age > 20){
//     console.log('You are an adult ');
//     let ninjas = ['ben','gety','musa','tednry']
//     if(ninjas.length>3){
//         console.log("thats's alot of ninjas");
//     }
// }
// const password = 'ts@';
// if(password.length>= 12 && password.includes('@')){  //logical (or. ||) ,&&
//     console.log('Thats a strong password');
// }else if(password.length >=8 || password.includes('@')&& password.length >= 5){
//     console.log('password might be strong');
// } else {
//     console.log('The Password is Weak');
// }

//                                        logical not

// let user = 'False';
// if(user){
// }
// console.log(!true);
// console.log(!false);
// const score  = [50,25,0,30,100,20,10];
// for( let i = 0; i < score.length; i++){
//     if(score[i]===0){
//         continue; 

                 // contiue

//     }
//     console.log('Your score: ', score[i]);
//     //                                  break and continue
//     if (score[i]===100){
//         console.log('you got the best score');
//         break;
//     }
// }

//                                  SWITCH STATEMENT

const grade = 'A';

switch (grade){
    case 'A':
        console.log( 'you got a A!');
        break;
        case 'B':
            console.log( 'you got a B!');
            break;
            case 'C':
                console.log( 'you got a C!');
                break;
                case 'D':
                    console.log( 'you got a D!');
                    break;
                    case 'E':
                        console.log( 'you got a E!');
                        break;
                        case 'F':
                            console.log( 'you got a F!');
                            break;
                            case 'G':
                                console.log( 'you got a G!');
                                break;
                                default:
                                    console.log('you entered an invalid mark');
}

//                  VARIABLES AND BLOCKS SCOPE

let age = 30;
if (true){
    let  age = 40;
    let names = 'kyle';
   
    console.log('Inside 1st Code block:',age,names);
    if (true){
        console.log('Inside 2nd Code block:',age,);  
    }
}
console.log('Outside Code block:',age);

//                      Function declaration

function greet(){
    console.log('hello there');
    
}
greet();
greet();
greet();
greet();
//       