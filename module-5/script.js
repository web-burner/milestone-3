// // String
// const country = "bangladesh";
// const division = `Cumilla`;
// const name = new String("shaon");
// console.log(country, division, name);

// // string length
// const country = "Bangladesh";
// console.log(country.length);

// // get element by  index
// const country = "Bangladesh";
// console.log(country[0]);

// const subject = 'Chemistry';
// const book = 'chemistry';
// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log('porikkhay fatay felmu');
// }else{
//     console.log('ammur hater mair khamu');
// }

// const str = "shaon,poddo,sujon,faysal";
// console.log(str.split(","));

// const friends = ["shaon", "poddo", "sujon", "faysal"];
// console.log(friends.join(""));

// const str = 'this is a string';
// console.log(str.toUpperCase());

// // slice method
// const str = 'programming';
// console.log(str.slice(3,10));

// // concat
// const frist = "Shaon";
// const second = "Rana";
// const fullname = frist.concat(" ", second);
// console.log(fullname);

// // includes

// const str = "my programming language is javascript";
// console.log(str.includes("programming"));

// reverse a string

// // 1. method
// const str = "i am learning web dev";
// let reversed = "";
// for (let i of str) {
//   reversed = i + reversed;
// }
// console.log(reversed);

// const str = "i am learning web dev";
// let reversed = "";
// for (let i = 0; i < str.length; i++) {
//   //   console.log(str[i]);
//   reversed = str[i] + reversed;
// }

// console.log(reversed);

// // method - 3
// const str = "i am learning web dev";
// const reversed = str.split("").reverse().join("");
// console.log(reversed);

// object properties
// const obj = {
//     name: 'shaon',
//     age: 23
// }

// const person = {
//   name: "Shaon",
//   age: 23,
//   location: "Malaysia",
// };
// const age = person["age"];
// console.log(age);
// const name = obj.name;
// console.log(name);

// // value access and change
// const person = {
//   name: "Shaon",
//   age: 23,
//   profession: "Developer",
//   salary: 40000,
// };

// person["salary"] += 10000;
// console.log(person["salary"]);

// // or

// const position = "profession";
// person[position] = "DevOps";
// console.log(person);

// // keys of object
// const person = {
//   name: "Shaon",
//   age: 23,
//   profession: "Developer",
//   salary: 40000,
// };
// const keys = Object.keys(person)
// console.log(keys);

// // value of object

// const person = {
//   name: "Shaon",
//   age: 23,
//   profession: "Developer",
//   salary: 40000,
// };
// person.salary += 10000;
// const values = Object.values(person);
// console.log(values);

// nested object
const school = {
  name: "Pora lekha valo na school",
  class: 10,
  subject: {
    bangla: {
      bangla1: "Bangla 1st",
      bangla2: "Bangla 2nd",
    },
    english: {
      english1: "English 1st",
      english2: "English 2nd",
    },
  },
};

delete school.subject;
console.log(school);
