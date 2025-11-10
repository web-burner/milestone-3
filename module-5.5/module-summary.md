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




⚙️ Function Practice Tasks

🔹 1. Basic Function Declaration & Calling
	1.	একটা function বানাও নাম হবে sayHello() — ভিতরে console.log করবে "Hello JavaScript".
👉 তারপর function টাকে call করো।
	2.	একটা function বানাও নাম printMyName() — ভিতরে console.log করবে "My name is Shaon".
👉 তারপর function call করে output দেখাও।

⸻

🔹 2. Function with Parameters
	1.	addNumbers(a, b) নামে একটা function বানাও যেটা দুইটা সংখ্যা যোগ করে console.log করবে।
👉 যেমন: addNumbers(10, 15) → output হবে 25
	2.	multiply(x, y) নামে একটা function বানাও যেটা দুইটা সংখ্যার গুণফল বের করবে।
	3.	introduce(name, age) নামে function বানাও, যেটা console.log করবে —
👉 "My name is [name] and I am [age] years old."

⸻

🔹 3. Function with Return
	1.	sum(a, b) নামে একটা function বানাও যেটা দুই সংখ্যার যোগফল return করবে।
👉 তারপর সেই return value টা console.log করো।
	2.	subtract(a, b) নামে function বানাও যেটা বিয়োগফল return করবে।
👉 তারপর একটা variable এ result রেখে সেটা print করো।
	3.	square(num) নামে function বানাও যেটা একটি সংখ্যার square return করবে।
👉 যেমন: square(5) → output: 25

⸻

🔹 4. Function Scope Check
	1.	একটা function বানাও নাম testScope()
	•	ভিতরে একটা variable message = "Hello World" রাখো
	•	function এর বাইরে console.log(message) দিলে কি হয় — দেখে বোঝো কেন এটা error দেয়।

⸻

🔹 5. Return Behavior Test
	1.	নিচের কোড লিখে দেখো output কী আসে:
    function demo() {
  console.log("Before return");
  return "Returned Value";
  console.log("After return");
}
console.log(demo());

⸻

🔹 6. Parameter & Argument Practice
	1.	একটা function বানাও নাম fullName(first, last)
👉 return করবে ${first} ${last}
👉 তারপর call করে console.log এ দেখাও।
	2.	একটা function বানাও নাম calculateTotal(price, quantity)
👉 return করবে price * quantity
👉 তারপর console.log করবে "Total price is: X"

⸻

🔹 7. Undefined Return Case
	1.	নিচের কোডে output কী হবে দেখো:
    function test(a, b) {
  const result = a + b;
}
console.log(test(5, 7));

👉 কেন undefined আসে সেটা নিজে বোঝো।

⸻

🔹 Bonus Mixed Task 💥
	1.	oddEven(number) নামে function বানাও:
👉 যদি সংখ্যা জোড় হয় print করবে "Even Number"
👉 না হলে "Odd Number"
	2.	greet(name, time) নামে function বানাও:
👉 return করবে "Good [time], [name]!"
যেমন: greet("Shaon", "Morning") → "Good Morning, Shaon!"
	3.	sumFrom1ToN(n) নামে function বানাও যেটা 1 থেকে n পর্যন্ত সব সংখ্যার যোগফল return করবে।
👉 উদাহরণ: sumFrom1ToN(5) → 1+2+3+4+5 = 15