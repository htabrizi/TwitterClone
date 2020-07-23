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

//4-8 var lis = document.querySelectorAll('li,h2,#hide-list');
// console.log(lis);

// Array.from(lis).forEach(function(li){
// li.textContent='hello';
// });

// var lis=document.querySelectorAll('ul li')
// undefined
// lis[0].style.cssText='backgroundColor:yellow'

// var h2 = document.querySelector("header h2");
// h2.className = 'changeBg';
// h2.className.add('changeFt');
// h2.classList.remove('changeBg');
// h2.classList.toggle('changeBg')
// console.log(h2.classList);

// var h2 = document.querySelector('header h2'); 
//  h2.addEventListener('click',function(){
//      a(5,20);
//  })
//  function a(x,y){
//      console.log(x*y);
//  }


// var div=document.querySelector('div.wrapper');
// var header = document.querySelector('header');
// var h2=document.querySelector('h2 header');
// div.addEventListener('click',()=>{
//     var delay=new Date().getTime()+1000;
//     while(new Date()<delay){}
//     console.log('from div');
    
// },false);
// header.addEventListener('click',()=> {
//     var delay=new Date().getTime()+1000;
//     while(new Date()<delay){}
//     console.log('from header');
// });
// oc
// var btn= document.getElementById('add-btn');
// var input =document.getElementById('add-input');

// btn.addEventListener('click',(e)=>{
//     
//     input.setAttribute('type','submit');
//     input.setAttribute('value', input.value);
// })

// var newEl = document.createElement('button');
// var text = document.createTextNode('click');
// var form = document.getElementById('add');
// newEl.setAttribute('style','display:block;background:green')
// newEl.appendChild(text);

// console.log(newEl);
//  form.appendChild(newEl);
// form.insertBefore(newEl,form.children[1]);
// newEl.parentElement.removeChild(newEl);

//example3
// var btn= document.getElementById('add-btn');
// var input =document.getElementById('add-input');
// btn.addEventListener('click',(e)=>{
//     e.preventDefault();

// })


var ul=document.querySelector('ul');
var btn= document.getElementById('add-btn');
if (addInput !==''){
    btn.addEventListener('click',(e)=>{
    e.preventDefault();
    var addInput=document.getElementById('add-input');
    var li=document.createElement('li'),
    firstPar= document.createElement('p'),
    secondPar=document.createElement('p'),
    firstIcon=document.createElement('i'),
    secondIcon=document.createElement('i'),
    input =document.createElement('add-input');


    firstIcon.className="fa fa-pencil-square-o";
    secondIcon.className="fa fa-times";
    input.className= "edit-note";
    input.setAttribute('type','text');
    firstPar.textContent=addInput.value;
    secondPar.appendChild(firstIcon);
    secondPar.appendChild(secondIcon);
li.appendChild(firstPar)
ul.appendChild(li);

addInput.value = ''


}



});