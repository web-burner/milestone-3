string : variable এর ভ্যালু কে single/double/backtic/new String কোটেশন এর মাধ্যমে ডিক্লেয়ার করা হয় তাই string। 

example : 
const country = "bangladesh";
const division = `Cumilla`;
const name = new String("shaon");
console.log(country, division, name);

string length : মাধ্যমে string এর মধ্যে কয়টা বর্ণ আছে তা জানা যায় তবে এটি white space কেও কাউন্ট করে। 

example: // string length
const country = "Bangladesh";
console.log(country.length);

get alphabet by index : // get element by  index
const country = "Bangladesh";
console.log(country[0]);

কিন্তু এইখানে index নাম্বার দিয়ে element get করা যায় ঠিক কিন্তু এলিমেন্ট change করা যায় না। string is immutable means not changeable . 

toLowerCase() : এর মাধ্যমে কোনও একটা স্ট্রিং কে lowerCase এর কনভার্ট করা যায়। 

example : 
cosnt name = 'shaon';
console.log(name.toLowerCase());

compare 2 string 
const subject = 'Chemistry';
const book = 'chemistry';
if(subject.toLowerCase() === book.toLowerCase()){
    console.log('porikkhay fatay felmu');
}else{
    console.log('ammur hater mair khamu');
} এখানে ২টা স্ট্রিং কে প্রথমে lowerCase এ কনভার্ট করে then কমপেয়ার করা হয়েছে। কারণ javascript is case sensitive। 

toUpperCase(): এর মাধ্যমে স্ট্রিং কে upperCase এ কনভার্ট করা যায়। 

example : 
const name = 'shoan';
console.log(name.toUpperCase());


trim : string এর শুরুতে বা শেষে স্পেস remove করতে use হয়। 

example: 
const str = '   panir opor nam life    '
console.log(str.trim());

split : কোনও একটা স্ট্রিং এর এলিমেন্ট গুলোকে split করে দেয়। এটি string element গুলোকে আলাদা করে একটা এরে রিটার্ন করে। আবার array element গুলোকে একটা স্ট্রিং রিটার্ন করে।

example : এইটা একটা এরে রিটার্ন করবে।
const str = "shaon,poddo,sujon,faysal";
console.log(str.split(","));

example : এইটা একটা স্ট্রিং রিটার্ন করবে।
const friends = ["shaon", "poddo", "sujon", "faysal"];
console.log(friends.join(""));

slice : string এর কোনও একটা অংশ কেটে নেওয়ার কাজ করে। 

example : // slice method
const str = 'programming';
console.log(str.slice(3,10));

concat : ২টি string কে eksathe জোরা লাগায়।

example : // concat
const frist = "Shaon";
const second = "Rana";
const fullname = frist.concat(" ", second);
console.log(fullname);

includes : string এর মধ্যে কোনও character অন্তভুক্ত আছে কিনা তা যাচাই করা হয়। 

example  : // includes

const str = "my programming language is javascript";
console.log(str.includes("programming"));


reverse a string : // 1. method
const str = "i am learning web dev";
let reversed = "";
for (let i of str) {
  reversed = i + reversed;
}
console.log(reversed);

method - 2 : 
const str = "i am learning web dev";
let reversed = "";
for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);
  reversed = str[i] + reversed;
}

console.log(reversed);

// method - 3
const str = "i am learning web dev";
const reversed = str.split("").reverse().join("");
console.log(reversed);


Object properties and values 

Object : কোনও একটি নির্দিষ্ট জিনিসের একাধিক ইনফরমেশন একটা ভ্যারিয়েবল এর মধ্যে রাখার যে পদ্ধতি তাঁকে অবজেক্ট বলে।

syntax: 
const obj = {
    name: 'shaon',
    age: 23
}

এখানে name,age হচ্ছে keys/properties আর shaon,23 হচ্ছে ভ্যালু। 
অবজেক্ট এর keys/properties and value pair হিসাবে থাকে। 
object হলো একটি non-primitive data .
যার ভ্যালু mixed হবে। স্ট্রিং, নাম্বার, বুলিয়ান ইত্যাদি। 

to get and set object properties 

object এর properties access করতে ২ ধরনের পদ্ধতি অবলম্বন করা যায়। 
১। dot notation : মনে অবজেক্ট এর নামের পরে dot দিয়ে access করা।
example : 
const obj = {
  name: "Shaon",
  age: 23,
  location: "Malaysia",
};
const name = obj.name;
console.log(name);

২। bracket notation(Recommended) : অবজেক্ট এর নামের পরে ব্রাকেট এর মধ্যে properties রেখে access করা।
example : 
const person = {
  name: "Shaon",
  age: 23,
  location: "Malaysia",
};
const age = person["age"];
console.log(age);


// value access and change
const person = {
  name: "Shaon",
  age: 23,
  profession: "Developer",
  salary: 40000,
};

person["salary"] += 10000;
console.log(person["salary"]);

// or

const position = "profession";
person[position] = "DevOps";
console.log(person);


keys of object : অবজেক্ট এর মধ্যে কয়টা keys আছে তা বের করা যায়। এইটা একটা এরে রিটার্ন করে।

example : // keys of object 
const person = {
  name: "Shaon",
  age: 23,
  profession: "Developer",
  salary: 40000,
};
const keys = Object.keys(person)
console.log(keys);

value of object : এইটা অবজেক্ট এর ভ্যালু গুলোকে একটা এরে আকারে রিটার্ন করে। 

example: // value of object

const person = {
  name: "Shaon",
  age: 23,
  profession: "Developer",
  salary: 40000,
};
person.salary += 10000;
const values = Object.values(person);
console.log(values);


nester object : একটা অবজেক্ট এর মধ্যে একটা অবজেক্ট তার মধ্যে আরেকটা অবজেক্ট এইরকম।

example: // nested object and get value and set 
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

console.log(school.subject.bangla.bangla1);


delete properties :
object থেকে কোনও একটা props ডিলিট করতে delete কিওয়ার্ড।

example : // deleted nested object props
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
