
// querySelector and querySelectorAll

const para = document.querySelector('div.error'); //this gets the div with the error for the paragraph you jst write .error
console.log(para);
const paras = document.querySelectorAll('p');
console.log(paras[2]); // selects a paragraph index.

paras.forEach(para =>{    //this list all the paragrap when the arrow function is used.
    console.log (para);
}); 

// const errors = document.querySelectorAll('.error');
// console.log(errors);

// Get an Element by id 
const title = document.getElementById('page-title');
console.log(title);

// get elements by class name
const errors = document.getElementsByClassName('errors');
console.log(errors);
console.log(errors[0]);