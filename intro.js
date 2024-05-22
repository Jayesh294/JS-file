// let a=5;
// let b=2;

// console.log("a=",a,"&","b=",b);
// console.log("a+b=",a+b);
// console.log("a*b=",a*b);
// console.log("a**b=",a**b);

//unary op;
// let a=5;
// let b=2;
 
// console.log("a=",a,"&","b=",b);

// console.log("a++=",a++);
// console.log("a=",a);
 //assign op;
  
//   let a=5;
//   let b=2;
//  a*=9;
//   console.log("a=",a);

//  let a=4;
//  let b=5 ;

//  console.log("5&&3:",!(a<=b));


// let room='yellow';
// let color;

// if(room=='dark'){
//   color="black";
// }
// else{
//   color='white';
// };
// console.log("room-color:",color);

//  let age=18;

// if(18>age){
//   console.log("u are an adult");
// }
// else if(age<18){
//   console.log("u are minor");
// }
// else if(age>50){
//   console.log("u are an old citizen");
// }


// let score=prompt("enter the score:");

// if(80<=score && score<=100){
// console.log("A grade");
// }
// else if (70<=score&& score<=79){
//   console.log("B grade");
// }
// else if(60<=score&&score<=69){
//   console.log("C grade");}

// else if(50<=score&&score<=59){
//   console.log("D grade");}

//   else {
//     console.log("F grade");}


// let sum=5;
// for( let i=1;i<=5;i++){
// sum+=i;
// }
// console.log("sum",sum); 

// let i=3;
// while(i<=9){
//   console.log(i);
//   i++;
// }

// let chutiya={
//   name:'gavar',
//   umar:22,

// };
// chutiya['name']='lavar';
//  console.log(chutiya);



//  let i=1;
// do{
//    console.log("apna cllg");
//  i++;
//  }
//  while(i<=10);

// let str="jayeshpar";
// let size=0;
//  for(let i of str){
//   console.log(i);
//   size++;
//  }
//  console.log(size);

// let student={
//   name:"jayesh parmar",
//   age:22,
//   cgpa:7.8,
//   isPass:true,
// };

// for(let key in student){
//   console.log(key,value="gg",student[key]);


//q1-------
//  for(i=0;i<=100;i++){
//   if(i%2!==0){
//     console.log(i);
//   }
//   else{

//   }

// let gamenum=25;
// let num=prompt("enter a random game number:");

// while(num!=gamenum){
//  num=prompt("wrong number , fir dal:");
// }
//  console.log("sahi haiiiii!");


// for(i=0;i<=100;i++){
//  console.log(i);
// }
 

// let age=24;
// if(age!=23){
//   color='black';
 
// }
// else{
//   color='white';
// }
  //  {
  
// }
// console.log(color);
// let x=0;
// for(let i=1;i<=5;i++){
//   console.log(i);
// }



// let num=0;
// while(num<25){
//   console.log(num);
//   num++;
// }



//  gnum='apna college';
//  for(let i=3;i<24;i++){
//  console.log(num);
//  }

// let gnum=prompt('Enter your age:');

// if(gnum<18){
//   console.log('minor');
// }

// else if(gnum>18 && gnum<30){
//   console.log('adult');
// }

// else{
// //   console.log('senior citizen');
// }



// let hh=`this is a tmlate lit ${2+3}`;
// console.log(hh);




// //templatye literal
// let obj={
//   name:'jay',
//   age:22,                                                                       
// }
// let op=`My name is ${obj.name} and my age is ${obj.age}`;
// console.log(op);

//q1;
// let str=prompt('Enter your full name');
//  let op=`@${str}${str.length}`;
//  console.log(op);

// let str='jjjd';

// console.log(str.replaceAll('j','s'));    


// let marks=["hello","world"];
// console.log(marks.length);//property

// let heros=["dsd","wdsd","wed","thus","fri"];
// heros[2]="jayesh";
// console.log(heros);
 
// for(let i=1;i<heros.length;i++){
//   console.log(heros[i]);
// }

//for of
// for(let el of heros){
//   console.log(el.toUpperCase());
// }

// let marks=[85,97,44,37,76,60];
// sum=85+97+44+37+76+60;
// console.log("the avg marks is",sum/marks.length);


// let items=[250,645,300,900,50];

// for(let i=0;i<items.length;i++){
//   console.log(`${items[i]}`);
//   let offer=items[i]/10;

//   items[i]=items[i]-offer;
//   console.log(`value after offer ${items[i]}`)
// }


// let veg=["potato","tomo","capi"];

// console.log(veg);
// let delitem=veg.pop("capi");


// console.log("delted item",delitem);
// console.log(veg);

// let arr=["bloom","micro","uber","google","ibm","netflix"];
// arr.shift();
// arr.splice(2,1,"Ola");
// arr.push("amazon");
// console.log(arr);

//function
// function myfunc(){
//   console.log("welcome here");
//   console.log("we are learning JS");
// }

// myfunc();
// myfunc();


// function myfunct(msg){
//   console.log(msg);
// }
// myfunct("I love JS",100);

// function sum(x,y){
//   s=x+y;
//   console.log("before return");
//   return s;
// }
// let val=sum(3,4);
// console.log(val);

// function sum(a,b) {
//   return a+b;
// }


//   const arrowsum=(a,b)=>{
//     console.log(a+b);
//   };
// function mul(a,b){
//   return a*b;
// }

// const arrowsum=(a,b)=>{
//   console.log(a*b);
// };


// function countVowels(str) {
//   let count= 0 ;
//   for(const char of str) {
   
//     if (
//       char === "a"||
//       char === "e"||
//       char === "i"||
//       char === "o"||
//       char === "u" 
//     ) {
//       count++;
//     }
//   }
  
//   return count;
// }

// const countview =(str)=>{
//   let count= 0 ;
//   for(const char of str) {
   
//     if (
//       char === "a"||
//       char === "e"||
//       char === "i"||
//       char === "o"||
//       char === "u" 
//     ) {
//       count++;
//     }
//   }
  
//   return count;
// }

// let arr=["mumbai","pune","delhi"];

// arr.forEach((val,idx,arr) => {
//   console.log(val.toUpperCase(),idx,arr);
// });

//q1;
// let arr=[2,3,4,5];

// arr.forEach((num) => {
//   console.log(num*num);
// });

// let num=[45,46,47];

// let hum=num.map((val)=>{
//   return val;

// });
// console.log(hum);

// let arr=[92,89,94,88];

// let arrfun=arr.filter((val)=>{
//  return val>90;

// });

// console.log(arrfun);

let n=prompt('enter your random number');
let arr=[];
for(let i=1; i<=n; i++) {
 arr[i-1]=i;
}
console.log(arr);

let s=arr.reduce((prev,curr)=>{
 return prev+curr;

});
console.log(s);

let st1=arr.reduce((prev,curr)=>{
 return prev*curr;

});
console.log(st);


