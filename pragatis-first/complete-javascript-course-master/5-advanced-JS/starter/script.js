//function constructor
/*
var john={
    name:'John',
    yearOfBirth:1998,
    job:'developer'
};
var Person = function (name, yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge=function() {
      console.log(2018-this.yearOfBirth);
};

Person.prototype.lastName = 'smith';

var john = new Person('John',1990,'teacher');

var jane =  new Person('jane',1998,'designer');

var jimmi = new Person('Jimmi',2000,'dancer');

john.calculateAge();
jane.calculateAge();
jimmi.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(jimmi.lastName);

*/

//Object.create
/*

var personProto = {
    calculateAge: function(){
        console.log(2018-this.yearOfbirth);
    }
};

var john = Object.create(personProto);
john.name='john';
john.yearOfBirth=1990;
john.job='teacher';


var jane= Object.create(personProto,{
    name :{value:'Jane'},
        yearOfBirth:{value:1969},
            job:{value:'designer'}
});
*/

//objects vs premitives

/*
//premitives
var a=23;
var b=a;
a=46;

console.log(a);
console.log(b);



//objects
var obj1={
    name:'john',
    age:28
};

var obj2=obj1;
obj1.age=30;

console.log(obj1.age);
console.log(obj2.age);

//functions

var age=27;
var obj={
    name:'Jonas',
    city:'lisbon'
};
var change = function(a,b){
    a=30;
    b.city='San Fransico';
}

change(age,obj);
console.log(age);
console.log(obj.city);
*/

//////////////////////////////////
///lectures:passing function as arguments

/*
var years=[1990,1969,2008,1997,1992];

function arrayCalc(arr,fn){
    var arrRes =[];
    
    for(var i=0;i<arr.length;i++){
        
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018-el;
    
}

function isFullAge(el){
    return el>=18;
}

function maxheartRate(el){
    if(el>=18 && el<=81){
    return Math.round(206.9-(0.67*el));
}
    else{
        return -1;
    }
}

var ages = arrayCalc(years,calculateAge); 
var fullAges=arrayCalc(ages,isFullAge);
console.log(ages);
console.log(fullAges);

*/

/////////////////
//function returning another functions
/*
function interviewQuestion(job){
    if(job==='designer'){
        return function(name){
            console.log(name+",can you please explain what UX design is? ");
        }    }
        else if(job === 'teacher'){
            return function(name){
                console.log('what subject do you teach '+name+'? ');
            }        }
            else{
                return function(name){
                    console.log('hello '+name+' ,what do you do?');
                }
            }
    }


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = 
    interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Mark');

interviewQuestion('teacher')('mark');
*/

//////////////
//Immediately INVOKED FUNCTION EXPRESSIONS


/*
//function game(){
//    var score =Math.random*10;
//    console.log(score>=5);
//}
//game();

(function(){
      var score =Math.random*10;
    console.log(score>=5);
})();

//console.log(score);

(function(goodluck){
    var score = Math.random()*10;
    console.log(score >= 5 -goodluck);
})(5);
*/

///////////////
//lecture: closures
/*
function retirement(retirementAge){
    var a="years left until retirement...";
    return function(yearOfBirth){
        var age=2018-yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS=retirement(66);
retirementUS(1990);


var retirementGermany=retirement(65);
retirementGermany(1990);


var retirementIndia=retirement(60);
retirementIndia(1990);


//retirement(66)(1990);
*/
//interview questions using closure
/*
function interviewQuestion(job){
    return function(name){
        if(job==='designer'){
            console.log(name+",can you please explain what UX design is? ");
        }    
        else if(job === 'teacher'){
                console.log('what subject do you teach '+name+'? ');
        }
            else{
             
                    console.log('hello '+name+' ,what do you do?');
           }
    }
}
interviewQuestion('teacher')('John');


    */
//////////////////////////

////Lecture: bind ,call,apply.
/*
var john={
    name:'John',
    job:'designer',
    age:25,
    presentation:function(style,timeOfDay){
        if(style=== 'formal'){
            console.log('Good '+timeOfDay+',Ladies and gentlemen! I\'m '+this.name+' .I\m a '+this.job+' and I\'m '+this.age +' years old.' );
        }
        else if(style === 'friendly'){
            console.log('Hey! what\'s up ?I\'m '+this.name+' .I\m a '+this.job+' and I\'m '+this.age +' years old. have a nice '+timeOfDay +".");
        }
    }
}

var emily={
    name:'emily',
    job:'artist',
    age:24
}

john.presentation('formal','morning');

//call method
john.presentation.call(emily,'friendly','afternoon');


//apply method
//john.presentation.apply(emily,['friendly','afternoon']);

var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('morning');
johnFriendly('night');
johnFriendly('afternoon');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('morning');
emilyFormal('evining');

*/

/*
var years=[1990,1969,2008,1997,1992];

function arrayCalc(arr,fn){
    var arrRes =[];
    
    for(var i=0;i<arr.length;i++){
        
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018-el;
    
}

function isFullAge(limit,el){
    return el>=limit;
}

var ages=arrayCalc(years,calculateAge);
var fullJapan=arrayCalc(ages,isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);

*/
///////////////////////////////////////
//coding challenge
/*
1.Build a function constructor called question to describe a question.Question should include
a.question itself
b.the answers from which the player can choose correct answer(choose adequate data structure here,
array,object,etc.)
c.correct answer (I would choose no for this)

2.create a couple of questions using the constructor

3.store them all inside an array

4.select one random question and log it on the console,together with possible answers
(each questions should have no)(hint:write a method for the questions objects for ths task)

5.use 'prompt' function to ask the user the correct answer.The user should input the no of the correct answer such as you disply it on task 4.

6. check if anwer is correct and print to the console weather the answer is correct or not
(hint:write another method for this.)

7.suppose this code would be plugin for other programmers to use in their code .So make sure 
that all your code is private and doesn't interface with the other programmers code.
(hint: we learned a special ethod to do that)
*/
/*
(function(){
    
function Question(question, answer,correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);
    
    for(var i = 0;i < this.answer.length; i++){
        console.log(i+':'+ this.answer[i]);
    }
}

Question.prototype.checkAnswer = function(ans){
    if(ans == this.correct){
        console.log('Correct answer...');
    }
    else{
        console.log('wrong answer....');
    }
}

var q1 = new Question('What is your age?',[20,21,22],1);
var q2 =  new Question('what is your job?',['teacher','designer','developer'],2);
var q3=new Question('Do you want to continue the course?',['yes','no','not decided!'],0);


var question=[q1,q2,q3];

var n=Math.floor(Math.random() * question.length);
question[n].displayQuestion();

answer= parseInt(prompt('enter the answer..'));

question[n].checkAnswer(answer);
})();



*/
/*
8.After you display the result ,display the next random question ,so that the game never ends(Hint:write a function for this and call it right after displaying the result.)

9.
*/



 (function(){
    
function Question(question, answer,correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);
    
    for(var i = 0;i < this.answer.length; i++){
        console.log(i+':'+ this.answer[i]);
    }
}

Question.prototype.checkAnswer = function(ans,callback){
    var sc=0;
    if(ans == this.correct){
        console.log('Correct answer...');
        sc=callback(true);
        
    }
    else{
        console.log('wrong answer....');
        sc=callback(false);
    }
    this.displayScore();
}
Question.prototype.displayScore= function(sc){
    conole.log('your current score is '+sc+'\n----------------------------');
}
var q1 = new Question('What is your age?',[20,21,22],1);
var q2 =  new Question('what is your job?',['teacher','designer','developer'],2);
var q3=new Question('Do you want to continue the course?',['yes','no','not decided!'],0);

function nextQuestion(){
    var question=[q1,q2,q3];
    
function score(){
        var sc=0;
        return function(){
            if(correct){
                sc++;
            }
            return sc;
        }
    }
var keepScore=score();

var n=Math.floor(Math.random() * question.length);
question[n].displayQuestion();

answer= prompt('enter the answer..');

       
    if(answer!=='exit'){
       question[n].checkAnswer(parseInt(answer));
       nextQuestion();
    }
    }
nextQuestion();
})();
