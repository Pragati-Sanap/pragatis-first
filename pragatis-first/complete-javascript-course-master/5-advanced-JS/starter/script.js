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


var years=[1990,1969,1978,1997,1992];

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






























