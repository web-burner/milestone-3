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