revise

1. variable
2. naming convention
3. string
4. number
5. boolean
6. data types
7. arithmetic operation
8. add,subtract,multiply,divide,modulus
9. shorthand
10. isNaN
11. Number
12. null

comparison operator :
২ বা ততোধিক এলিমেন্ট এর উপর compare করা।

1. greater than (>) : বড়
   console.log(5>10)

2. less than (<) : ছোট
   console.log(5<10)

3. equal (==) / (===) : সমান
   console.log(5==10); compare value ;
   console.log(5===10); compare value and type;

4. greater than or equal (>=) : বড় বা সমান
   console.log(5>=10);

5. less than or equal (<=) : ছোট বা সমান
   console.log(5<=10);

6. not equal (!=) : সমান না
   console.log(5!=10)

7. AND (&&) : ২ টা শর্ত সত্য হবে
   console.log(5<10 && 10> 9)

8. OR (||) : যে কোনও একটা শর্ত সত্য হবে
   console.log(5>10 || 5<10);

9. not (!) : উল্টো ম্যান দিবে।
   console.log(!false)

Javascript conditionals :

if(condition){
do some work;
কন্ডিশন সত্য হলে এই কোড টি রান করবে
}else {
do this work;
আর if এর কন্ডিশন মিথ্যা হলে এই কোড রান করবে
}

conditional branching if else condition:
if statement : এখানে if statement এর মধ্যে থাকা কন্ডিশন true হলে code execute করবে।

example:
if (3 < 5) {
console.log("I have a smaller value");
}

let biriyaniPirce = 250;
if (biriyaniPirce < 300) {
console.log("Give some biriyani");
}

else statement : যদি if এর condition সত্য না হয় তবে এটি কাজ করবে।
example
let biriyaniPirce = 500;
if (biriyaniPirce < 300) {
console.log("Give some biriyani");
} else {
console.log("Biriyani is too expensive");
}

multiple condition and logical operator
এখানে আমরা লজিকাল অপারেটর এর মধ্যমে একাধিক শর্ত যাচাই করব।

const salary = 20000;
const height = 5.3;
const isBCS = true;
if(salary > 15000 && height > 5){
console.log('Eso baba kobul');
}else {
console.log('nam ki tor mukbul')
}

এখানে AND হলে যতগুলা শর্ত দেওয়া হবে সব গুল সত্য হতে হবে আর OR হলে যে কোনও একটা শর্ত সত্য হলে কোড এক্সিকিউট করবে। 

const salary = 20000;
const height = 5.3;
const isBCS = true;
if ((salary > 20000 && height > 6) || isBCS) {
  console.log("Eso baba kobul");
} else {
  console.log("nam ki tor mukbul");
}


multi level condition 

example - 1
let price = 4000;
if (price >= 5000) {
  const discount = price * 0.1;
  price -= discount;
  console.log(`price you have to pay ${price}`);
} else if (price >= 3000) {
  const discount = price * 0.05;
  price -= discount;
  console.log(`price you have to pay ${price}`);
} else {
  console.log("You have to pay full price");
}


example - 2
const age = 50;
if (age >= 50) {
  console.log("50% discount");
} else if (age >= 35) {
  console.log("20% discount");
} else {
  console.log("no discount");
}


nested if else 

example : 
const age = 23;
const money = 500;
if (age >= 18) {
  if (money >= 300) {
    console.log("You can buy a premium ticket");
  }
} else if (age < 18) {
  if (money < 300) {
    console.log("you can buy a regular ticket");
  }
} else {
  console.log("dure giya mor goribs");
}

example -2 :
const age = 18;
const money = 0;
if (age >= 18) {
  if (money >= 300) {
    console.log("You can buy a premium ticket");
  } else if (money >= 200) {
    console.log("you can buy a regular ticket");
  } else {
    console.log("dure giya mor goribs");
  }
} else {
  console.log("you are not eligible for entry");
}


ternary operator 
ternary operator হলো shorthand of if else 

example : 
if/else 
const age = 23;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result);

only if 
const age = 23;
const result = age >= 18 && "Adult" ;
console.log(result);

nested ternary 
let price = 5000;
const isLeader = false;

const result = isLeader
  ? price > 2000
    ? (price /= 2)
    : 0
  : (price += price * 0.5);
console.log(result);


logical not (!) লজিকাল নট ভ্যালু কে উল্টে দে true থাকলে false করে দেয় 
normal way 
const isLeader = true;
if(isLeader){
    console.log('leader is coming');
}else {
    console.log('vitore dukte dimu na')
}

এখানে আমি ডাইরেক্টলি false চেক করছি 
const isPassed = false;
if(isPassed === false){
    console.log('tore biya diya dimu');
}else {
    console.log('khaite bos')
} 

এখানে আমি logical not use করবো 

const isPassed = false;
if (!isPassed) {
  console.log("tore biya diya dimu");
} else {
  console.log("khaite ja biriyani ache");
}


double not (!!) value কে ২ বার উল্টে দে তারপর সত্য মিথ্যা রিটার্ন করে 



🧠 JavaScript Revision Practice Tasks (Part – 2)

⸻

🔹 1. Variable & Naming Convention

Task:
	1.	var, let, const দিয়ে ৩টা ভিন্ন ভ্যারিয়েবল ঘোষণা করো।
	2.	নাম meaningful রাখো এবং naming convention অনুসরণ করো।
	3.	একটা ভুল নাম (যেমন সংখ্যা দিয়ে শুরু বা space সহ) লিখে দেখো error আসে কিনা।
	4.	const variable এর মান update করার চেষ্টা করো (কি error আসে দেখো)।

⸻

🔹 2. String

Task:
	1.	একটি নাম, শহর এবং দেশ string হিসেবে ঘোষণা করো।
	2.	এগুলো concat করে পুরো sentence বানাও যেমন — “My name is Shaon, I live in Dhaka, Bangladesh.”
	3.	typeof দিয়ে চেক করো সবগুলোর টাইপ।

⸻

🔹 3. Number

Task:
	1.	একটি integer এবং একটি float সংখ্যা ঘোষণা করো।
	2.	parseInt() ও parseFloat() ব্যবহার করে string থেকে number এ রূপান্তর করো।
	3.	toFixed(2) ব্যবহার করে দশমিকের পর ২ ঘর রাখো।
	4.	Infinity, -Infinity এর উদাহরণ তৈরি করো।

⸻

🔹 4. Boolean

Task:
	1.	দুটি boolean ভ্যারিয়েবল বানাও — isRich, isMarried
	2.	typeof দিয়ে তাদের টাইপ চেক করো।
	3.	Logical NOT (!) ব্যবহার করে তাদের উল্টো মান বের করো।
	4.	Double NOT (!!) ব্যবহার করে তাদের truthy/falsy মান নির্ধারণ করো।

⸻

🔹 5. Data Types

Task:
	1.	string, number, boolean, null, undefined — প্রত্যেকটির উদাহরণ দাও।
	2.	typeof দিয়ে তাদের টাইপ চেক করো।
	3.	null এর typeof কি আসে? (output টি note করো)

⸻

🔹 6. Arithmetic Operation

Task:
	1.	Addition, Subtraction, Multiplication, Division, Modulus — প্রতিটির উদাহরণ কোড লেখো।
	2.	Exponentiation (**): একটি সংখ্যার square বের করো।
	3.	(10 + 5) / 2 এর মান console.log দিয়ে দেখাও।

⸻

🔹 7. Shorthand

Task:
	1.	price নামে variable = 1000
তারপর নিচের অপারেশনগুলো shorthand ব্যবহার করে করো:
	•	+500
	•	-200
	•	*2
	•	/4
	•	%=3
	•	**=2
শেষে প্রতিবার console.log দিয়ে result দেখাও।

⸻

🔹 8. isNaN

Task:
	1.	"123" এবং "abc" — এই দুই ভ্যারিয়েবলের জন্য isNaN() ব্যবহার করে চেক করো কোনটা number নয়।
	2.	isNaN(25) এর আউটপুট কি হয় দেখো।
	3.	parseInt(“abc”) করলে কি হয়, তারপর সেটার উপর isNaN() ব্যবহার করো।

⸻

🔹 9. Number Object

Task:
	1.	একটি string "45.89" কে number এ রূপান্তর করে তার integer অংশ বের করো।
	2.	Number() ব্যবহার করে "100" কে number বানাও এবং typeof দিয়ে চেক করো।

⸻

🔹 10. null

Task:
	1.	একটি ভ্যারিয়েবল = null দাও এবং typeof দিয়ে চেক করো।
	2.	null ভ্যারিয়েবল এর সাথে সংখ্যা যোগ করলে কি হয় দেখো।

⸻

🔹 11. Comparison Operator

Task:
	1.	৫টা সংখ্যা দিয়ে নিচের অপারেটরগুলোর উদাহরণ দাও —
, <, >=, <=, ==, ===, !=
	2.	=== এবং == এর মধ্যে পার্থক্য প্রমাণ করো।
	3.	AND (&&), OR (||), NOT (!) অপারেটর দিয়ে ছোট ছোট condition বানাও।

⸻

🔹 12. Conditionals (if, else if, else)

Task:
	1.	একটি number ইনপুট নিয়ে চেক করো সেটি even না odd।
	2.	age অনুযায়ী discount বের করো (multi-level if else ব্যবহার করে)।
	3.	salary, height, isBCS তিনটি শর্ত AND এবং OR দিয়ে যাচাই করো।
	4.	nested if else ব্যবহার করে age এবং money অনুযায়ী ticket buy করতে পারবে কিনা তা নির্ধারণ করো।

⸻

🔹 13. Ternary Operator

Task:
	1.	age >= 18 হলে “Adult” না হলে “Minor” প্রিন্ট করো (ternary দিয়ে)।
	2.	nested ternary দিয়ে discount হিসাব করো (যেমন price >= 5000 হলে 10%, না হলে 5%)।
	3.	শুধুমাত্র true হলে কোনও কিছু প্রিন্ট করো (&& ব্যবহার করে)।

⸻

🔹 14. Logical NOT / Double NOT (!!)

Task:
	1.	isPassed = false হলে logical not (!) ব্যবহার করে মেসেজ দাও “Try again!”
	2.	(!!) ব্যবহার করে truthy/falsy মান চেক করো — যেমন !!0, !!1, !!””, !!“shaon”
	3.	কোনও variable এর মান না থাকলে (!!variable) কি রিটার্ন করে সেটা চেক করো।