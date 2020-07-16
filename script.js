//DOM Elements
const mainPage = document.querySelector('.main-page');
const loginpage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn')
/*************************************************************/
/*************************************************************/
//main page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginpage.style.display = 'grid';
};
middleContent.addEventListener('click', e => {
    if (e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    }

});
btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    if (inputUserInfo.value !== "" && inputPassword.value !== "") {
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';

    } else {
        goToLoginPage()
        loginModal.style.display = 'block';
    }
});

//login page
modalX.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.loginPassword');

if(loginUserInfo.value!=="" && loginPassword.value!==""){
    loginpage.style.display='none';
    newsFeedPage.style.display='block';
}
else{
    loginModal.style.display='block'
}
});
