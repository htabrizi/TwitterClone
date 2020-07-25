function finalResult (score){
    if (score>81){
        return function (name){
            console.log(name + ',you Passed');
        }
    else if(score >=51){
return function (name){
    console.log(name +',passed');
}
}

}
var result1 = finalResult(77);
console.log(result1); 