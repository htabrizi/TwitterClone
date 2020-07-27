<<<<<<< HEAD
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
=======
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("Get", "/.users.json", true);
xmlhttp.onload = function () {
  if (this.status == 200) {
    var myData = JSON.parse(this.responseText);
    console.log(myData);
  }
} 
xmlhttp.send();
>>>>>>> b753786deab542f188f88834992cc2cf33300aae
