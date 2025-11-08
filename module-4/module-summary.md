array : array কে আমি একটা ডিমের ঝুড়ির সাথে তুলনা করতে পারি। যার মধ্যে একাধিক ভ্যালুর একটা কালেকশন থাকবে। এই ভ্যালু হতে পারে নাম্বার,স্ট্রিং বা বুলিয়ান ইত্যাদি। তবে একই টাইপ এর ভ্যালু একটা array এর মধ্যে থাকবে মিক্সড ভ্যালু থাকবে না।

// array declare
const numbers = [12,13,24,345,35,23];

array length : array এর মধ্যে কয়টা এলিমেন্ট আছে তা জানা যায়।

example: // array length
const numbers = [1,2,3,4,5,6,7];
console.log(numbers.length)

array index : serial number of element .
এই সিরিয়াল শুরু হয় ০ থেকে।

index নাম্বার দিয়ে এলিমেন্ট বের করার উপায়
// array index
const numbers = [1,2,3,4,5,6,7];
const forth = numbers[3]
console.log(forth)

set and update element by index:

example : // set element and update by index
const numbers = [1,2,3,4,5,6,7];
numbers[3] = 99;
console.log(numbers)

add and remove from array
push : array এর শেষে এলিমেন্ট add করার জন্য use হয়।

example : // push method  
const numbers = [1,2,3,4,5,6,7];
numbers.push(8);
numbers.push(9);
console.log(numbers)

example -2 :
const numbers = [1,2,3,4,5,6,7];
numbers.push(8,9,10);
console.log(numbers)

pop method : array এর শেষে এলিমেন্ট রিমুভ করে।

example :
// pop method
const numbers = [1,2,3,4,5,6,7];
numbers.pop();
console.log(numbers)

example - 2: // store in variable pop element
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const out1 = numbers.pop();
const out2 = numbers.pop();
console.log(numbers);
console.log(out1, out2);


shift : array এর শুরুতে এলিমেন্ট বাদ দেয়।

example :
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.shift();
console.log(numbers);


unshift : array এর শুরুতে এলিমেন্ট add করে। 

example : //unshift method 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.unshift(0);
console.log(numbers);


basic array method : 

includes : array এর মধ্যে কোনও একটা নির্দিষ্ট এলিমেন্ট আছে কিনা তা চেক করার কাজ করে।

example: // includes method
const friends = ["shaon", "poddo", "sujon", "faysal"];
console.log(friends.includes("sujon"));

indexOf method: array এর মধ্যে থাকা কোনও একটা নির্দিষ্ট element এর index নাম্বার জানা যায়। তবে কোনও একটা এলিমেন্ট থাকলে তার ইনডেক্স দিবে আর না থাকলে -1 দিবে। 

example : // indexOf method 
const friends = ["shaon", "poddo", "sujon", "faysal"];
console.log(friends.indexOf('poddo')); (1)
console.log(friends.indexOf('roman')); (-1)

Array.isArray mehtod : কোনও একটা array কে array কিনা তা চেক করা হয় এই method এর মাধ্যমে। 

example : // Array.isArray method 
const friends = ["shaon", "poddo", "sujon", "faysal"];
console.log(Array.isArray(friends))


join method : join এর মাধ্যমে এরে এর এলিমেন্ট গুলোকে seperator এর মাধ্যমে এক সাথে join করা যায়। 

example : // join method 
const friends = ["shaon", "poddo", "sujon", "faysal"];
console.log(friends.join(','));

concat method : এর মাধ্যমে ২টা array কে একসাথে জোর লাগানো যায়। 

example : // concat method
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
const num3 = num1.concat(num2);
console.log(num3);

slice method : এর মাধ্যমে এরে থেকে কিছু এলিমেন্ট কে কেটে নিয়ে কাজ করা যায় আবার চাইলে কোনও একটা ভ্যারিয়েবল এর মধ্যেও রাখা যায়। slice করার পর এটি একটা নতুন এরে রিটার্ন করবে মেইন এরে ঠিক থাকবে। 

example : // slice method
const friends = ["shaon", "poddo", "sujon", "faysal"];
console.log(friends.slice(0, 2));
console.log(friends)


splice method : এর মাধ্যমে কোনও একটা array এর এলিমেন্ট কে কেটে নেওয়া আবার এলিমেন্ট add ও করা যায়। এইটা নতুন এরে রিটার্ন করে এবং পুরনো array কে change করে। যেই index গুলো কেটে নেওয়া হবে সেইখানে এলিমেন্ট add করবে। 

example : // splice method :
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.splice(1, 5, 10));
console.log(numbers);
