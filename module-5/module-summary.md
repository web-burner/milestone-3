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