function a(){
    var arr =[];
    for (var i=0; i<3;i++){
        arr.push(()=>{console.log(i);}

        )};
return arr;

}

var person={
    firstname:'john',
    lastname:'smith',
    fullname: function(){
        return this.firstname+' '+this.lastname;
    }
};
var nick={
    firstname:'Nick',
    lastname:'Doe'
      
};
console.log(person.fullname.call(nick));
var definePerson= function(age,job){
    console.log(this.fullname()+' is ' + age+' years old and he is a '+ job);

};
definePerson.call(person,28,'developer');
definePerson.apply(person,[28,"postman"]);
var getPerson= definePerson.bind(person,25);
getPerson('musician');
getPerson('28')