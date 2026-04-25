console.log("Introduction to arrays!");

//Arrays
// let subjects = ["Java", "Cpp", "C", "Python"];
// console.log(subjects);

//index based accessing
// console.log(subjects[3]);

//modify element based on index
// subjects[3] = "Ruby";
// console.log(subjects);

//add element
// subjects[4] = "Python";
// console.log(subjects);

// array length property
// console.log(subjects.length);

// ARRAY METHODS

// let marks=[10,20,30,40,50,60,70,80,90,100];
// console.log(marks);

//push--> to add an lement at the end
// marks.push(110);
// console.log(marks);

//pop--> to remove an element from end
// console.log(marks.pop());
// console.log(marks);

//unshift--> to add an element at starting position
// marks.unshift(5);
// console.log(marks);

//shift --> to remove the first element
// marks.shift();
// console.log(marks);

//slice
// console.log(marks.slice(4,9));
// console.log(marks.slice(-2));

//splice
// let marks=[10,20,30,40,50,60,70,80,90,100];

// console.log(marks);
// marks.splice(1,3,0,0,0,0);
// console.log(marks);

// concat

// let students=["Varun","Vishnu","Vignesh"]
// let studentMarks=[10,20,30]

// console.log(students);
// let details=students.concat(studentMarks);
// console.log(details);

// let userName="Varun Kumar";
// let res=userName.split();
// console.log(res);

// console.log(userName.split("").reverse().join(""));

// console.log(userName.split(" ").reverse());

// -----map()

let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// marks.map((x) => {
//   console.log(x);
// });


// marks.map((x) => {
//   console.log(x+1);
// });


// let marks10 = marks.map((x) => x * 10);
// console.log(marks10);


// let pass=marks.filter(x=>x>60);
// console.log(pass);




//reduce
// let totalMarks=marks.reduce((a,b)=>{
// return a+b;
// })

// console.log(totalMarks);


//

console.log(typeof marks)