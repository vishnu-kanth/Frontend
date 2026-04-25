
// !-- Named functions

// function add(a=10,b=20){
//     console.log(a+b);
    
// }

// add (100,200);

// !--- Anonymous function / unnamed function

// (function (a,b){
//     console.log(a+b);
    
// } (20,30))

// ! -- IIFE(Immidate invoke function expression)

// (function (a,b){
//     console.log(a+b);
    
// }) (20,30)

// ! -- Funtional Expression we have to store the function in variable

// let div = function(a,b){
//     console.log(a/b);
    
// }
// div(30,31)


// --- High Ordered function and functional method 

// function hof(name,ysj){
//     console.log(name);
//     callback();
    
// }

// function callback(){
//     console.log("I am a callback method");
    
// }
// hof('vishnu',callback);

// Arrow Functions
// it is shorter way to create the function
// no need to use function keyword

// let mult=(a,b)=>{
//  console.log(a*b);
 
// }


// mult(11,7)



// if arrow function is accepting only 1 parameter no need to write paranthesis
// if arrow function contains only 1 statement inside it we can skip the curly brackets

// let mult=a=>console.log(a*a);

// //explicit return
// function add(a,b){
//     return a+b;
// }

// let res=add(10,90);
// console.log(res);

// !--- nested function

// function parent(name,city){
//     console.log(name);

//     function child(){
//         console.log(city);
        
//     }
//     child()
// }

// parent('vishnu','Bengaluru');

// console.log('start');

// function parent(){
//     let name ='vishnu';
//     let city = 'Banglore'
//     console.log(name);
//     function child(){
//         console.log(city);    
//     }
//     child()
// }
// parent('vishnu','Bengaluru');

// !---- Functional Currying

// function outer(a){
//     let name = 'vishnu';
//     return function inner(b){
//         console.log(name);

//         return function innerMost(c){
//             console.log('I am innerMost function');
//             console.log(a+b+c);
            
//         }
//     }
// }
// outer(10)(20)(30)

// !-- currying in arrow function

//  let multi = a=>b=>c=>a*b*c;
//  let res = multi(10)(2)(3);
//  console.log(res);


