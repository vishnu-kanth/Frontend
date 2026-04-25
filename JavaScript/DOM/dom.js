// //!-- Document Object Model

// //!-- document.getElementbyId('')

// let h1 = document.getElementById('head1')
// console.log(h1);

// //!-- document.getElemetbyClassName('')

// let parag = document.getElementsByClassName('para')
// console.log(parag);

// //! document.getElemetbyTagName('')

// let p1=document.getElementsByTagName('p')
// console.log(p1);

// //! document.getElemetbyName('')

// let heading = document.getElementsByName('heading')
// console.log(heading);

// //! document.querySelector('')

// let para1 = document.querySelector('.para');
// console.log(para1);

// //! document.querySelectorAll('')

// let para = document.querySelectorAll('.para');
// console.log(para);



// let div = document.createElement('div');
// console.log(div);

// div.innerHTML='<h1>Hello Everyone</h1>';
// div.innerText= '<h2> Good Afternoon</h2>';

// let body = document.body;
// body.append(div);

// !--- css manipulation

let main = document.createElement('main');
let section = document.createElement('section');
let article = document.createElement('article');

document.body.append(main);

// main.append(section);
// section.append(article);


// !-- appendChild()

// main.appendChild(section,article)

// let p =document.createElement('p');

// p.innerText='Good Afternoon';

// document.body.append(p);

// p.style.backgroundColor='red';

// p.style.color='yellow';

// !-- classlist 

// let container = document.querySelector('#container');

// classList.add

// document.body.classList.add('dark')

// classList.remove

// document.body.classList.remove('light')

// classList.toggle

let btn = document.getElementById('btn');
document.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    // btn.innerText='Light'; 
    console.log(document,body.classList.contains("dark"));
    document.body.classList.contains("dark")
    ? (btn.innerText="Light")
    :(btn.innerText="Dark")

})





