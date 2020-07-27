var person={
    firstname:'john',
    Lastname:'smith',
    fullname: function(){
        return this.firstname+this.Lastname;
    }
};
var definePerson= function(age,job){
    console.log(this.fullname()+age+job);
};
 definePerson(person,28,'develope')