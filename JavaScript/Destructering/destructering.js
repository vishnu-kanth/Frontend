
// !-- Array Destructuring 
// !-- Extracting elements from array and sorting inside varaibles..
// !-- we can give any variable name

// let marks = [10,20,30,40,50];

// console.log(marks);

// let [a,b,c] = marks;
// console.log(marks[2]);

// let [x,,z] = marks;
// console.log(x);
// console.log(z);

//==============================================================================================================


// let person = {
//     name : 'vishnu',
//     city : 'Pulivendula'
// } 

// let {name,city} = person;

// console.log(name);
// console.log(city);

//==============================================================================================================

// !-- spread & rest (...)

// let week1 = [10,20,30];

// let week2 = [30,60,90];

// let combine = [...week1,...week2];
// console.log(combine);

//==============================================================================================================


// !-- rest LHS - Packing the elements

// let marks = [10,20,30,40,50,60,70,80,90,100,110];
// let [a,b,...c] = marks;
// console.log(c);


//==============================================================================================================


// Rest In Object

// let user = {
//     username :'vishnu',
//     role : 'ASE',
//     salary : '100000',
// }

// let {username,...extraInfo} = user;
// console.log(username);
// console.log(extraInfo);



//==============================================================================================================

// !-- In function

// function add (a,b,...c){
//     // console.log(a+b+c);
//     console.log(c);

//     let res = c.reduce((acc,cur)=>{
//         return acc+cur
//     },0);

//     console.log(c);   
// }
// here we are using operators to combine all elements into single element by using reduce keyword (+,-,*,/)

// add(10,20,30,40,50,60,70,80);


//==============================================================================================================

// !-- spread in function

let marks = [10,20,30,40,50,60,70,80,90];

function add (a,b,c,d,e,f){
    console.log((a,b,c,d,e,f));
}

add (...marks) 






