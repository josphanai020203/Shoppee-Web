var checkEyePass = false;
window.onclick = function(event){

    
    if(event.target == document.getElementById('modal-signUp'))
    {
        document.getElementById('modal-signUp').style.display = 'none';
        setTimeout(function(){

            document.getElementById('modalSignIn-container').style.animation = "growth 0.2s linear";
            document.getElementById('modal-signUp-container').style.animation = "growth 0.2s linear";
            document.querySelector('.modalSignIn').style.animation = 'fadeIn 0.2s ease-in';
            document.querySelector('.modal-signUp').style.animation = 'fadeIn 0.2s ease-in';
        },200)
        
    }
    else if (event.target == document.getElementById('modal-signIn')) {
        document.getElementById('modal-signIn').style.display = 'none';
        setTimeout(function(){
            document.getElementById('modalSignIn-container').style.animation = "growth 0.2s linear";
            document.getElementById('modal-signUp-container').style.animation = "growth 0.2s linear";
            document.querySelector('.modalSignIn').style.animation = 'fadeIn 0.2s ease-in';
            document.querySelector('.modal-signUp').style.animation = 'fadeIn 0.2s ease-in';
        },200)
    }
    else if (event.target == document.getElementById('signIn')) {
        document.getElementById('modal-signIn').style.display = 'none';
        document.getElementById('modal-signUp').style.display = 'flex';
   
    }
    else if (event.target == document.getElementById('signUp')) {
        document.getElementById('modal-signUp').style.display = 'none';
        document.getElementById('modal-signIn').style.display = 'flex';
    }
    else if (event.target == document.querySelector('.eyePass')) {
             if (checkEyePass == false) {
                inputPass.type = 'text';
                checkEyePass = true;
            }
             else {
                inputPass.type = "password";
                checkEyePass = false;
            }
    }
    else if (event.target == document.querySelector('.header__search-input')) {
       document.querySelector('.header__search-historys').style.display = 'block';
    }
    else if (event.target == document.getElementById('SignUpBtn')) {
        document.getElementById('modal-signUp').style.display = 'flex';
        setTimeout(function(){
            document.getElementById('modalSignIn-container').style.animation = "none";
            document.getElementById('modal-signUp-container').style.animation = "none";
            document.querySelector('.modalSignIn').style.animation = 'none';
            document.querySelector('.modal-signUp').style.animation = 'none';

        },200)
    }
    else if(event.target == document.getElementById('SignInBtn')){
        document.getElementById('modal-signIn').style.display = 'flex';
        setTimeout(function(){
            document.getElementById('modalSignIn-container').style.animation = "none";
            document.getElementById('modal-signUp-container').style.animation = "none";
            document.querySelector('.modalSignIn').style.animation = 'none';
            document.querySelector('.modal-signUp').style.animation = 'none';

        },200)
    }
    else {
       document.querySelector('.header__search-historys').style.display = 'none';
        
    }

}
var checkUser = false ;
var checkPass = false;
var inputUserName =document.querySelector('.signIn__inputForm--Name');
var inputPass = document.querySelector('.signIn__inputForm--pass');
inputUserName.oninput = function (event)
{   
    checkUser = true ;
    if (checkUser === true && checkPass === true) 
    {
        document.querySelector('.signIn__btn').classList.remove('disabledButton');
    }
    
    if (this.value == "") {
        if (!document.querySelector('.signIn__btn').classList.contains('disabledButton')) {
             document.querySelector('.signIn__btn').classList.add('disabledButton')
            
                checkUser = false ;
            
        }
        
    }
}
inputPass.oninput = function (event)
{
    checkPass = true ;
    if (checkUser === true && checkPass === true) 
    {
        document.querySelector('.signIn__btn').classList.remove('disabledButton');
    }
    if (this.value == "") {
        if (!document.querySelector('.signIn__btn').classList.contains('disabledButton')) {
             document.querySelector('.signIn__btn').classList.add('disabledButton')
             checkPass = false ;
            
        }
        
    }
}
var selectInput = document.querySelector('.select-input__icon');
selectInput.onclick = function(event){
    document.querySelector('.select-input__list').classList.toggle('displayBlock');
}
var homeProductLiked = document.querySelector('.home-product-item__like');
homeProductLiked.onclick = function(){
    document.querySelector('.home-product-item__like').classList.toggle('home-product-item__liked');
}