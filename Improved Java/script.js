var fristProto={
    sayHello:function(){
        return  this.name;
    }
};
var john =Object.create(firstProto,{
    name:{
        value:'john'
    }
});
console.log(john);