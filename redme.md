## Created Readme file

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

## Ans =>
 **getElementById** এটা ব্যাবহার করা হয় সুধু একটা টেগ বা স্পান খোজার জন্য ।

 **getElementsByClassName** এটা ব্যাবহার করা হয় অনেক গুলা টেগ কে খোজে তার মধ্যে লোপ চালিয়ে তার মধ্যের ইভেন্ট এড করা বা ইনার টেক্সট এর  জন্য। 

**querySelector / querySelectorAll** এটা ব্যাবহার করা হয় document থেকে কোনো Element এ খোঁজতে এইটা একটা input নেবে সেটা Document এ খোজবে এবং টা অণুযায়ী return করবে । 

2. How do you **create and insert a new element into the DOM**?
## Ans =>
আমরা চাইলেই নতুন element তৈরি করতে পারি document.creatElement("div") ব্যাবহার করে । 

3. What is **Event Bubbling** and how does it work?
## Ans =>
মনে করি আমাদের আমার চাচার ছেলের নাম দরকার তখন আমি কি করব প্রথমে আমি আমার বাবার কাছে যাব 
তারপর যাব বাবার বাবা অর্থাৎ আমার দাদার কাছে সেখানে আমি বলব আপনার বাচ্চাদের লিস্ট দিন,
 আমি সেখান থেকে আমার যেই চাচাত ভাই এর নাম দরকার তার বাবার কাছে যাব,
  তারপর তাকে বলব আপনার বাচ্চাদের লিস্ট দিন তারপর আমি সেখান থেকে আমার,
   যেই চাচাত ভাইয়ের নাম লাগবে তা  আমি নিতে পারব 
আমারা একটি  Exampone দেখি =>
<!-- const hotline = copyBtn.parentNode.parentNode.children[3].innerText;
console.log(hotline); -->
4. What is **Event Delegation** in JavaScript? Why is it useful?
## Ans =>
এটা আমারা এক্তা উধারণ এর মাধ্যমে দেখি মনে করি একটা ক্লাসে ২০ জন ছাত্র আছে  স্যার চায় সবার পরা ধরতে কিন্তু স্যার সবাইকে 
এক এক করে বলতে চান না যে পড়া বল তাই স্যার ক্লাস এর রুল ১  কে বললেন যে তুমি পড়া বল এবং তুমার পড়া সেশ হলে তুমার
পাশের জন কে বল পড়া বলতে 
আমরা একটি উধারন এর মাধ্যমে দেখি =>
**<!-- const copyBtns = document.getElementsByClassName("cardCopyBtn"); -->
<!-- for (let copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
     alert("The number has been copied)

      }); 
 } -->

5. What is the difference between **preventDefault() and stopPropagation()** methods?
## Ans =>
 **preventDefault()** এইটা ব্যবহার করা হয় যখন আমরা চাই যে একটা ফাংশন এর ইভেন্ট তা না চলোক
  তখন আমারা **preventDefault()** ব্যবহার করব ।

**stopPropagation()** এইটা ব্যবহার করা হয় যখন আমারা চাই সুধু বাচ্চা তা কে নিতে কিন্তু সাথে বাচ্চার বাবা কে 
না নিতে তখন আমরা কিন্তু তার বাবা ত জাবেই তাই তার বাবা কে থেকাতে **stopPropagation()** ব্যবহার করব । 