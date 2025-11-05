there are 3 pillar of web development 1. html 2. css 3. javascript

javascript is a high level language .
human readable language is high level interpreted language
javascript is a just in time compiled language

what is interpreted vs compiled language ?
= interpreted language is executed line by line by an interpreter . that's mean the code is read , analyzed and run directly , without convert machine code .

= compiled language first translate machine code by compiler

math needed for programming

1. number : positive / negative
2. number type : integer and float , even odd
3. Operation : + , - , \* , / , %
4. percentage
5. sum
6. average
7. max/min number
8. series : even / odd
9. area: triangle , rectangular , circle
10. prime number
11. x axis , y axis

Variable in JavaScript
= variable is container where can store data . it means it is able to vary something.

there are 5 things to declare variable

1. var/let/const keyword for declare variable
2. meaningful name for variable
3. (=) equal sign to assign value
4. value of variable
5. semi-colon (;)

example :
var name = 'shaon';
let age = 23;
const nationality = 'Bangladeshi';
const isPoor = true;
here if we declare a variable with var keyword it will be re-declarable and re-assignable 

for let keyword it's value upgrade but cannot re-declare 

for const it is not able to upgrade value and re-declare . 

if i declare a variable but don't assign value for it it will return undefined . 

for print the output 
console.log(variable name);

example: 
let age = 23;
console.log(age);



data type : 
string : string হলো text format ভ্যালু। single/ double quotation এর মধ্যে কিছু লেখা হলে সেটি string হিসাবে গণ্য করা হয়।
example : 
let name = 'shaon';
console.log(name);

number/numeric: সংখ্যা লিখার জন্য কোনও quotation ব্যবহার না করে লিখা লাগে । number কে ২ ভাবে জানতে পারি 
    ১। integer (দশমিক ছাড়া সংখ্যা)
    ২। float (দশমিক সহ সংখ্যা)

example : 
let age = 23;
let pi = 3.1416;
console.log(age,pi)

boolean : যার ভ্যালু সত্য/মিথ্যা হয় (true/false)

example : 
const isRich = false;
console.log(isRich);


check type of data 
কি ধরনের ডাটা তা বুঝার জন্য typeof keyword ব্যবহার করা হয়। 

example : 
const isPoor = true;
console.log(typeof isPoor);

keyword : keyword হচ্ছে জাভাসকৃপ্টের কিছু কিওয়ার্ড যেই গুলা কিছু কাজ এর জন্য রিসার্ভড করে দেওয়া আছে। 

like, var/let/const etc.

naming convention : 
1. no keyword 
2. no space or gap in variable name 
3. no quote (""/'')
4. cannot start with number but number can use from second word 
5. case sensitive (uppercase/lowercase)
6. recommended camelCase (userName)
7. use underscore for gap in variable name (snake case);
8. pascal case (UserName)


js keyword is always should be lowercase 


