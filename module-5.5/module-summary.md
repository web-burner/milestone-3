function : function হচ্ছে একটি block of code যা প্রয়োজনে বার বার ব্যবহার করা যায়। 

function declare : 
function functionName() {
  console.log("I am from function");
}
functionName();

function keyword > function name > () > {here the code};

function কে declare করলে চলবে না এর মধ্যে থাকা কোড কে রান করার জন্য function কে কল করতে হবে। 

functionName(); এইভাবে কল করা হয়।


// function with parameter and arguments 
function calculator(a, b) {
  console.log(a + b);
}
calculator(5, 7);

এখানে ফাঙ্কশন declare করার সময় ২টা  parameter নেওয়া হয়েছে। তারপর ফাঙ্কশন call করার সময় ২টা arguments দেওয়া হয়েছে মানে parameter এর ভ্যালু। তারপর function এই ভ্যালু নিয়ে কিছু কাজ করে output দিবে। 


আবার function থেকে আমরা চাইলে কিছু রিটার্ন করতেও পারি। 

example : // return value form function

function myFunc(a, b) {
  let sum = a + b;
  return sum;
}
const a = 5;
const b = 7;
const result = myFunc(a, b);
console.log(result);

এখানে sum কে return করে দেওয়া হয়েছে এবং সেই value কে একটা variable এর মধ্যে স্টোর করে রাখা হয়েছে। তবে return মধ্যে কিছু খুঁজে না পেলে আউটপুট দিবে undefined দিবে

নোট: function এর মধ্যে কোনও ভ্যারিয়েবল declare করলে তা বাহির থেকে access করা যাবে না। আবার একবার return করে দিলে return এর পরে কোনও কোড থাকলে ওই কোড আর কাজ করবে না।