///////////////////////////////////////
// Lecture: Hoisting
/*
//function hoisting
calculateAge(1997);

function calculateAge(year){
    console.log(2018-year);
}

//retirement(1997);
var retirement = function(year){
    console.log(65-(2018-year));
}

retirement(1997);


//variable

console.log(age);
var age=21;

function foo(){
   var age=24;
    console.log(age);
}
foo();

console.log(age);


*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example
/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}



*/
// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d);
    console.log(a+d);
}



*/
///////////////////////////////////////
// Lecture: The this keyword 


//console.log(this);
/*
calculateAge(1997);

function calculateAge(year){
    console.log(2018-year);
}

console.log(this);
*/
var john={
    name:'john',
    YOB:1997,
    calculateAge:function(){
    console.log(this);
        console.log(2016-this.YOB);
        
        /*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        */
}

}
john.calculateAge();



var mike={
    
    name:'Mike',
    YOB:1992
};
mike.calculateAge=john.calculateAge;
mike.calculateAge();