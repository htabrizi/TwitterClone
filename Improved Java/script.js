// Lecture: Get And Manipulate On Individual Elements - Part 1

/*
console.log(document.getElementById('list'));

var el = document.getElementById('list');
console.log(el);
console.log(typeof el);

// var el = document.getElementById('LIST');
// console.log(el);

console.log(el.textContent);
console.log(el.textContent = 'Hello');

var heading = document.getElementById('heading').textContent;
console.log(heading);

var ulElement = document.getElementById('list');
console.log(ulElement.textContent = heading);

console.log(el.innerHTML);
console.log(el.innerHTML = 'Hello');
console.log(el.innerHTML = '<h1>Hello</h1>');
console.log(el.textContent = '<h1>Hello</h1>');
*/


/* var icons =document.getElementsByClassName('fa');
 4-6 for(var i=0; i<icons.length; i++)
 {
     console.log(icons[i]);
 }
 var iconsArr=Array.from(icons);
 console.log(iconsArr);
 console.log(icons);
 iconsArr.push('hello');
 console.log(iconsArr); 
 4-7 Array.from(icons).forEach(function(icon ){
     console.log(icon );
 });
 var lis= document.getElementsByTagName('li');
 console.log(lis);
*/


var lis = document.querySelectorAll('li,h2,#hide-list');
console.log(lis);

Array.from(lis).forEach(function(li){
li.textContent='hello';
});