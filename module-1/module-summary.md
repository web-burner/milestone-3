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

value update : 
let age = 23;
age = 24; 
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


Js Number : 
string to number 
integer : পূর্ণসংখ্যাকে স্ট্রিং থেকে নাম্বার এ কনভার্ট করতে parseInt(variableName);

const age = "23";
const parseAge = parseInt(age);
console.log(age,parseAge)

float : দশমিক number কে স্ট্রিং থেকে নাম্বার এ কনভার্ট করতে parseFloat ব্যবহার হয় ।

const pi = "3.1416";
const parsePi = parseFloat(pi);
console.log(pi, parsePi);


toFixed(): এর মাধ্যমে বলে দেওয়া যায় যে দশমিক এর পরে কয়টি সংখ্যা থাকবে। 

const num1 = 0.1;
const num2 = 0.2;
console.log((num1+num2).toFixed(2))

Infinite/-infinite : কোনও ধনাত্বক সংখ্যা কে ০ দিয়ে ভাগ করলে অসংগায়িত আসবে তা infinite হিসাবে আউটপুট দিবে। ঋণাত্বক সংখ্যা হলে -infinite দিবে। 

const num = 43;
const num2 = -32;
console.log(num / 0);
console.log(num2/ 0);


what is NaN? 
= NaN stands for Not a Number . কোনও সংখ্যার  অপারেশন সম্পন্ন করার পর যদি সংখ্যা খুঁজে না পায় তবে তাঁকে NaN হিসাবে আউটপুট দিবে। 



Arithmetic operations 
addition (+): দুই বা ততোধিক সংখ্যার যোগ সম্পন্ন করে। 
const num1 = 234;
const num2 = 200;
console.log(num1 + num2);

subtraction (-): দুই বা ততোধিক সংখ্যার বিয়োগ সম্পন্ন করে। 
const num1 = 234;
const num2 = 200;
console.log(num1 - num2);

multiplication (*): দুই বা ততোধিক সংখ্যার গুণ সম্পন্ন করে। 
const num1 = 10;
const num2 = 5;
console.log(num1 * num2);

division (/); দুই বা ততোধিক সংখ্যার ভাগ সম্পন্ন করে। 
const num1 = 50;
const num2 = 5;
console.log(num1 / num2);

modulus (%): দুইটি সংখ্যার ভাগশেষ বের করে 
const num1 = 11;
const num2 = 2;
console.log(num1 % num2);

exponentiation (**): কোনও সংখ্যার উপর পাওয়ার দিতে ব্যবহার করা হয়। 
const num = 23;
const powered = num ** 2;
console.log(powered);



shorthand : এই পদ্ধতি তখন ব্যবহার করা হবে যখন কোনও ভ্যারিয়েবল এর বর্তমান ভ্যালু কে পরিবর্তন করে নতুন ভ্যালু এর মধ্যমে অপারেশন সম্পন্ন করা হবে। 
let price = 10000;
let price = price + 3888;
shorthand : 
price += 3888;
console.log(price)

addition (+): 
let num = 29;
num += 10;
console.log(num)

subtraction (-): 
let num = 29;
num -= 10;
console.log(num)

multiplication (*): 
let num = 29;
num *= 10;
console.log(num);

divide (/):
let num = 29;
num /= 10;
console.log(num)

modulus (%): 
let num = 29;
num %= 2;
console.log(num)

exponentiation (**):
let num = 10;
num **= 2;
console.log(num)



concatination (+):
২টি ভ্যারিয়েবল এর ভ্যালু কে পাশাপাশি যোগ করতে concat ব্যবহার করা হয় 
const num1 = 20;
const num2 = '10';
console.log(num1+num2);

তবে এখানে একটা প্রবলেম আছে এইটা যোগ এর ক্ষেত্রে পাশাপাশি বসে তবে অন্য অপারেশন এর ক্ষেত্রে সঠিক math করে। 

🧠 Practice Tasks

🔹 1. Interpreted vs Compiled

Task:
নিজের ভাষায় ৩ লাইনে লিখো —
	1.	Interpreted language কীভাবে কাজ করে
	2.	Compiled language কীভাবে কাজ করে
	3.	JavaScript কোন ক্যাটাগরিতে পড়ে এবং কেন

⸻

🔹 2. Math Basics Practice

Task:
	1.	দুটি integer সংখ্যা যোগ করো
	2.	একটি float এবং integer সংখ্যা দিয়ে ভাগ করো
	3.	শতকরা হিসাব বের করো (যেমন 45 এর 20%)
	4.	৩টি সংখ্যা যোগ করে average বের করো
	5.	৩টি সংখ্যার মধ্যে max ও min খুঁজে বের করো

⸻

🔹 3. Variable Practice

Task:
	1.	var, let, const দিয়ে আলাদা ৩টি variable ঘোষণা করো
	2.	var দিয়ে তৈরি করা variable আবার re-declare করে নতুন মান দাও
	3.	let দিয়ে তৈরি করা variable এর মান আপডেট করো
	4.	const দিয়ে তৈরি করা variable আপডেট করার চেষ্টা করো (কি error আসে দেখো)
	5.	কোনও variable ঘোষণা করো কিন্তু মান দিও না — তারপর console.log দিয়ে চেক করো

⸻

🔹 4. Data Type Practice

Task:
	1.	name নামে একটি string variable বানাও
	2.	age নামে একটি number variable বানাও
	3.	isMarried নামে একটি boolean variable বানাও
	4.	প্রতিটির typeof চেক করো
	5.	একটি number কে string-এ convert করো (toString() ব্যবহার করে)
	6.	একটি string কে number এ convert করো (parseInt() / parseFloat())

⸻

🔹 5. Arithmetic Operations Practice

Task:
	1.	Addition, Subtraction, Multiplication, Division, Modulus – প্রতিটির উদাহরণ কোড লেখো
	2.	Exponentiation ব্যবহার করে একটি সংখ্যার square এবং cube বের করো
	3.	Infinity এবং -Infinity এর উদাহরণ দাও
	4.	NaN এর উদাহরণ তৈরি করো (যেমন: "abc" * 10)

⸻

🔹 6. Shorthand Practice

Task:
	1.	একটি price নামে variable তৈরি করো এবং সেটাতে 1000 দাও
	2.	তারপর shorthand ব্যবহার করে
	•	+500
	•	-200
	•	*2
	•	/4
	•	%=3
	•	**=2
এই সব অপারেশন করে console.log দিয়ে result দেখাও

⸻

🔹 7. Concatenation Practice

Task:
	1.	দুটি string variable বানাও — firstName, lastName
	2.	concat করে পুরো নাম দেখাও
	3.	number + string করলে কি হয় সেটা দেখো (যেমন: 10 + "5")
	4.	subtraction করলে কি হয় (যেমন: "10" - 5)    