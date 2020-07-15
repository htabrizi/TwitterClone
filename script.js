//DOM Elements
const mainpage = document.querySelector('.main-page');
const loginpage = document.querySelector('.login-page');
const middleContent=document.querySelector('.middle-content');
/*************************************************************/
/*************************************************************/

//main page
const goToLoginPage=()=> {
    mainpage.style.display = 'none';
    loginpage.style.display = 'grid';
};
middleContent.addEventListener('click',e =>
{
   if (e.target.classList[1] === 'main-btn')
   {
       goToLoginPage();
   }

});

