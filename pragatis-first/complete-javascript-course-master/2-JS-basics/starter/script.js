/*
Auther:Pragati Sanap
Company:Angular Minds
Date:22June2018
*/

/****************
*variable and data types *

*/
/*
var firstName='Pragati';
console.log(firstName);

var lastName='Sanap';
console.log(lastName);

var age=21;
var fullAge=true;

console.log(fullAge);

var job;
console.log(job);

var job='Developer';
console.log(job);

//varible declaration rules..
var $xyz=90;
var xtz0=90;
var nif=10;

*/

/****************
*variable mutation and type coercion *

*/
/*
var firstName="Pragati";
var age=21;

//type coercion
console.log(firstName + " "+ age);

var job,isMarried;
job='Developer';
isMarried=false;

console.log(firstName+"  is "+ age+" year old "+job+". Is she married? "+isMarried);

//variable mutation
age="tewenty one";
job='daugher';

alert(firstName+"  is "+ age+" year old "+job+". Is she married? "+isMarried);


var lastName= prompt('what is your lastname?');
console.log(firstName + " "+lastName);
  */

/****************
*Basic Operators
*

*/
 /*
var now,johnYear,markYear;
now=2018

johnAge=28;
markAge=33;
johnYear=now-johnAge;
markYear=now-markAge;

console.log(johnYear);


//arithmetic operators
console.log(now+2);
console.log("* "+now*2);
console.log("/ "+now/2);

//logical operators
var johnOlder=johnAge<markAge;
console.log(johnOlder);

//typeOf operator

console.log(typeof johnOlder);
console.log(typeof johnYear);
console.log(typeof "hi its pragati")
var x=10;
console.log(x);
var z;
console.log(z);


*/
/*************************
*operator precedance
*/
/*
var now=2018;
var johnAge=28;
var johnYear=1989;
var fullAge=18;
var isFullAge=now-johnAge>=fullAge;
console.log(isFullAge);

var markAge=33;
var avgAge=(markAge+johnAge)/2;
console.log(avgAge);

*/
/***********************
*Challenge 1
*/
/*


var heightJohn=1.6;//meters
var massJohn=65;//kg

var heightMark=1.7;
var massMark=70;

var bmiJohn = massJohn / (heightJohn*heightJohn);
var bmiMark = massMark / (heightMark * heightMark);

console.log(" BMI John = "+bmiJohn);
console.log("BMI OF Mark = "+bmiMark)

var isJohnBmiGreater=bmiJohn>bmiMark;
console.log('isJohn\'s BMI heigher than johns?'+ isJohnBmiGreater);

*/
/******************************
*
if else statements.
*/
/*
var firstName="Pragati";
var civilStatus="single";

if(civilStatus==='married'){
    
    console.log(firstName+" is married");
}
else{
    console.log(firstName+" Will get married soon!");
    
}

var isMarried=true;
if(isMarried){
    
    console.log(firstName+" is married");
}
else{
    console.log(firstName+" Will get married soon!");
    
}



var heightJohn=1.6;//meters
var massJohn=65;//kg

var heightMark=1.7;
var massMark=70;

var BMIJohn = massJohn / (heightJohn*heightJohn);
var BMIMark = massMark / (heightMark * heightMark);

console.log(" BMI John = "+BMIJohn);
console.log("BMI OF Mark = "+BMIMark)

if(BMIJohn>BMIMark){
    
    console.log("John is having greater BMI");
}
else{
        console.log("Mark is having greater BMI");

}

*/
/**************************
basic boolean operations
*/
/*
var firstName = "John";
var age = 16;

if(age < 13)
    {
        console.log(firstName+" is a boy.");
    }
else if(age >= 13 && age < 20) {
        console.log(firstName+" is a teenager.");
}
else if(age >= 20 && age < 30) {
        console.log(firstName+"is a young Man.");
        }
else{
    console.log(firstName+" is a Man.");
}
*/
/********************
*The ternary Operator and Switch Statement
*/
/*
var firstName = 'John';



//ternary operator
age >= 18 ? console.log(firstName + "drinks beer ." ):
console.log(firstName+" drinks juice");

var drink= age >= 18 ? 'beer' : 'Juice' ;
console.log(drink);

//switch statement
var job="developer";

switch(job){
        
    case 'developer':
        console.log(firstName + ' makes a website. ');
        break;
    case 'teacher':
        console.log(firstName + ' teaches to  code. ');
        break;
    case 'dancer':
        console.log(firstName + ' dance on the song. ');
        break;
}

var age=10;
switch(true){
    case age < 13:
        console.log(firstName+" is a boy.");
        break;
        
    case age >= 13 && age < 20:
        console.log(firstName=" is a teenager.");
        break;
        
    case age>= 20 && age < 30:
        console.log(firstName+"is a young Man.");
        break;
        
    default:
        console.log(firstName+" is a Man.");

        
}
*/
/**********************
*Truthy and Falsy values and equality operators
*/
//falsy values: undefined , null, 0, '', NaN
//truthy values:NOT falsy values

//var height=1.5;
//var height='jkgghkjjh';
/*
var height=23;
if(height || height === 0){
    console.log('variable is defined. ');
}
else{
    console.log('variable is not defined. ');
}

//equality operator
if(height === '23'){
    console.log('The  == operator does type correction;')
}
*/

/*****************
*Coding Challenge 2**/ 
/*
var t1Avg = (89 + 120 + 103) / 3;
var t2Avg = (116 + 94 + 123) / 3;
var t3Avg = (97 + 134 + 105)/3;
console.log(t1Avg+" "+t2Avg+" "+t3Avg+" ")
if(t1Avg > t2Avg && t1Avg > t3Avg){
    console.log("TEAM 1 IS WINNER...!!!");
}
else if(t2Avg > t1Avg && t2Avg > t3Avg){
    console.log("TEAM 2 IS WINNER...!!!");
}
else if(t3Avg > t1Avg && t3Avg > t2Avg){
    console.log("TEAM 3 IS WINNER...!!!")
}
else if(t3Avg === t1Avg || t3Avg === t2Avg || t1Avg ===t2Avg)
{
    console.log("Its draw...!!!")
}


var t1Avg = (116 + 94 + 123) / 3;
var t2Avg = (89 + 120 + 103) / 3;

if(t1Avg >t2Avg){
    console.log("TEAM 1 IS WINNER...!!!");
}
else if(t1Avg=t2Avg){
    console.log("It's Draw!!!");
}


var t1Avg = (89 + 120 + 103) / 3;
var t2Avg = (116 + 94 + 123) / 3;
var t3Avg = (116 + 94 + 123)/3;
console.log(t1Avg+" "+t2Avg+" "+t3Avg+" ")
if(t1Avg > t2Avg && t1Avg > t3Avg){
    console.log("TEAM 1 IS WINNER...!!!");
}
else if(t2Avg > t1Avg && t2Avg > t3Avg){
    console.log("TEAM 2 IS WINNER...!!!");
}
else if(t3Avg > t1Avg && t3Avg > t2Avg){
    console.log("TEAM 3 IS WINNER...!!!")
}
else if(t3Avg === t1Avg || t3Avg === t2Avg || t1Avg ===t2Avg)
{
    console.log("Its draw...!!!")
john.age=john.calcAge();

}

*/

/*******************
* Functions**
*/
/*
function calculateAge(birthYear) {
    return 2018-birthYear;
}

var ageJohn=calculateAge(1990);
var ageMike=calculateAge(1945);
var ageJane=calculateAge(1999);

console.log(ageJohn,ageMike,ageJane);

function yearsUntilRetirement(year , firstName)
{
    var age =calculateAge(year);
    var retireMent=60-age;
    if(retireMent>0){
    console.log(firstName+" retires in "+ retireMent + "years.");
    }
    else{
         console.log(firstName+" retires is retired. ");
    }
}

yearsUntilRetirement(1990,'John');
yearsUntilRetirement(1945,'Mike');
john.age=john.calcAge();

yearsUntilRetirement(1999,'Jane');
*/


/*****************
function statements and Expressions
*/

//function declaration
//function whatDoYouDo(job, firstName){}

//function expression
/*
var whatDoYouDo = function(job,firstName){
    switch(job){
            
        case 'teacher':
            return firstName+ " teaches kid how to code ";
        
        case 'driver':
            return firstName+" drives a cab.";
            
        case 'designer':
            return firstName+' designs beautiful websites.';
            
        default:
            return firstName+" does something else.";
    }
}

console.log(whatDoYouDo('teacher','John'));
john.age=john.calcAge();

console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','mark'))

*/
/******************
Arrays
*/
/*
var names=['John','Mark','jane'];
var years=new Array(1990,1969,1949);

console.log(names);
console.log(names.length);

names[1] = 'Ben';
names[names.length]='Mary';
console.log(names);

///different datatypes

var john=['John','Smith',1990,'teacher',false];
john.push('blue');
//insert at index 0
john.unshift('Mr.');
console.log(john);

//removes last element 
john.pop();
john.pop();
//removes first element
john.shift();
console.log(john);


console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer')===-1?"john is NOT a designer":'John IS a designer.';
console.log(isDesigner);

*/

/*****************
challenge 3
*/

/*

function calculateTip(bills)
{
    
var percentage;
switch(true){
        
    case (bills < 50):
        percentage=.2;
        break;
    case (bills < 200 && bills >50):
        percentage=.15;
        break;
    case bills>200:
        percentage=.10;
        break;
}
    return percentage*bills;
}

var bills= [124,48,268];
var tip1 = calculateTip(bills[0]);
console.log(tip1);
var tip2 = calculateTip(bills[1]);
var tip3 = calculateTip(bills[2]);

var tips=[tip1,tip2,tip3];
    console.log(tips);





var paid1=(bills[0]+tips[0]);
var paid2=(bills[1]+tips[1]);
var paid3=(bills[2]+tips[2]);

var paid=[paid1,paid2,paid3];
console.log(paid);
*/

/****************
Objects and Properties
*/


/*
Auther:Pragati Sanap
Company:Angular Minds
Date:22June2018
*/
/*

//object literal
var john={
    firstName: 'John',
    lastName: 'Smith',
    birthYear:1990,
    family:['Jane','emily','mark'],
    job:'Developer',
    isMarried:false
};

console.log(john);

console.log(john.firstName);
console.log(john['lastName']);
var x='birthYear';
console.log(john[x]);


john.job='designer';
john['isMarried']=true;
console.log(john);

//new object syntax
var jane=new Object();
jane.name='jane';
jane.birthYear=1989;
jane.job='Artist';
jane.hobby='Dancing';

console.log(jane);
*/
/*>>>>>>>>>>>>>>
objects and methods
*/
/*
var john={
    firstName: 'John',
    lastName: 'Smith',
    birthYear:1998,
    family:['Jane','emily','mark'],
    job:'Developer',
    isMarried:false,
    calcAge: function(){
        //return 2018-this.birthYear;
        this.age=2018-this.birthYear;
    }
};
//console.log(john);

//console.log(john.calcAge());
john.calcAge();
console.log(john.age);

*/
/*  <<<<<<<Coding challenge 4>>>>
***********/
/*
var john={
    firstName:'John',
    lastName:'Smith',
    mass:85,
    height:1.7,
    calcBMI: function(){
    this.BMI=this.mass/(this.height*this.height);
}
}

var mark={
    firstName:'Mark',
    lastName:'baker',
    mass:91,
    height:1.75,
    calcBMI: function(){
    this.BMI=this.mass/(this.height*this.height);
}
}

john.calcBMI();
mark.calcBMI();
console.log(john,mark)

console.log("john BMI= "+john.BMI);
console.log("mark BMI= "+mark.BMI);

if(john.BMI<mark.BMI){
    console.log("mark is having greater BMI "+mark.BMI)
}
else if(mark.BMI<john.BMI){
    console.log("john is having greater BMI "+john.BMI)
}
else{
    console.log("both are having same BMI..!!!")
}

*/

/***********
Loops and Iteration
****/
/*
//for loop
for(var i=1;i<=10;i++)
    {
        console.log(i);
    }
var john=['John','Smith',1990,'teacher',false];

for(var i=0;i<john.length;i++){
        console.log(john[i]);
    }


console.log("\n while loop");
//while
var i=0;
while(i<john.length)
{
    console.log(john[i]);
    i++;
}

console.log("\n continue and break statements");
//continue and break statements
var john=['John','Smith',1990,'teacher',false,'blue'];

for(var i=0;i<john.length;i++){
    if(typeof(john[i])!== 'string')
        continue;
    console.log(john[i]);
    }

console.log("\n ");
for(var i=0;i<john.length;i++){
    if(typeof(john[i])!== 'string')
        break;
    console.log(john[i]);
    }

//backward loop
console.log("\n ");
for(var i=5;i>=0;i--){
    console.log(john[i]);
}

*/
/***************************
challeng 5 section 2
*/
/*
//john

var john=
{bills: [124,48,268,180,42],
tip:new Array(),
billPaid:new Array(),
calcTip: function(bills){
    
for(var i=0;i<bills.length;i++){
    if(bills[i]<50){
        this.tip[i]=02*bills[i];
    }
    else if(bills<200 && bills>50){
        this.tip[i]=015*bills[i];
    }
    else{
        this.tip[i]=0.1*bills[i];
    }
}},
calcPaid: function(bills,tip){
    for(var i=0;i<bills.length;i++){
       this.billPaid[i]=bills[i]+tip[i]; 
    }
},
 
    calcAvg: function(tip){
        count=0;
          totalTip=0;
        for(var i=0;i<tip.length;i++){
            var totalTip =totalTip+tip[i];
           count++;
        }
         this.avgTip=totalTip/count;
        return this.avgTip;
    }
}
john.calcTip(john.bills);
john.calcPaid(john.bills,john.tip);
for(var i=0;i<john.bills.length;i++){
    console.log("bill of "+i+" = "+ john.bills[i]);
    console.log("tip of "+i+" = "+john.tip[i]);
    console.log("total paid of hotel "+i+" = "+john.billPaid[i]);
}
john.calcAvg(john.tip);

console.log(john);

for(var i=0;i<john.bills.length;i++){
    console.log(john.tip[i]);
}

john.calcAvg(john.tip);
console.log(john.avgTip);

console.log("John avg = "+john.avgTip);

//mark

var mark={
    bills:[77,375,110,45],
    tip:new Array(),
    avgTip:0,
    calcTip:function(){
        for(var i=0;i<this.bills.length;i++){
            if(this.bills[i]<100){
                this.tip[i]=0.2*this.bills[i];
            }
            else if(this.bills[i]>100 && this.bills[i]<300){
                this.tip[i]=0.1*this.bills[i];
            }
            else{
                this.tip[i]=0.25*this.bills[i];
            }
        }
    },
  
    
    calcAvg: function(tip){
        count=0;
          totalTip=0;
        for(var i=0;i<tip.length;i++){
            totalTip =totalTip+tip[i];
           count++;
        }
         this.avgTip=totalTip/count;
        return this.avgTip;
    }
    
}
mark.calcTip();
mark.calcAvg(mark.tip);
console.log(mark);

//mark.calcAvg(mark.bills);
for(var i=0;i<mark.bills.length;i++){
    console.log(mark.tip[i]);
}
//console.log(mark.tip);
mark.calcAvg(mark.tip);
console.log(mark.avgTip);
console.log("mark avg = "+mark.avgTip);



if(mark.avgTip > john.avgTip){
    console.log("mark is having greater average tip = "+mark.avgTip);
}
else if( mark.avgTip<john.avgTip){
    console.log("john is having greater average tip = "+john.avgTip);
}
*/