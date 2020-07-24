var person1={};
person1.firstname='john';
person1.lastname='smith';

var person2={};
person2.firstname='nik';
person2.lastname='dou';

function createPerson(first,last){
    
  this.first=first;
    this.last=last;
   
}
var p3=new createPerson('1','t');
console.log(p3);


var strObj=new String('hello');
console.log(typeof strObj);
console.log(strObj);