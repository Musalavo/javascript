// objects literals
let user = {
    name: 'kyles',
    age: '34',
    profession: 'Js Tuitor',
    location:'Uganda',
    email: 'kyle@gmail.com',
    blogs:[{title:'js as a scripting language',likes: 30},
        {title:'js basics and importane',likes: 50}
    ],
    login: function(){        // login (methods to objects.)
        console.log('the user is logged in');
    },
    logout: function(){      //logout (methods to objects)
        console.log('the user has logged out');
    },
    logBlogs: function(){
        console.log('js is the best for scripting');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        })
    }
};
// console.log(user);
// console.log(user.name);
// user.age = 45;
// console.log(user.age);
// user.name = 'okumu';
// console.log(user.name);
// console.log(typeof user);

user.login();
user.logout();
user.logBlogs();

// objects in an array

const blogs = [{title:'js as a scripting language',likes: 30},
    {title:'js basics and importane',likes: 50}
];
console.log(blogs);

// maths objects.
console.log(Math);
console.log(Math.PI);

const area = 7.7;
console.log(Math.round(area));  
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers
const random = Math.random();         //this give any number
console.log(random);           
console.log(Math.round(random));      //this round the random number
console.log(Math.round(random*100));  //this round the given random number tht is between 1 and 100.