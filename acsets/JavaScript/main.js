window.onclick = function(event){

    if(event.target == document.getElementById('modal-signUp'))
    {
        document.getElementById('modal-signIn').style.display = 'none';
        document.getElementById('modal-signUp').style.display = 'none';
    }
    if (event.target == document.getElementById('modal-signIn')) {
        document.getElementById('modal-signIn').style.display = 'none';
    }

    if (event.target == document.getElementById('signIn')) {
        document.getElementById('modal-signIn').style.display = 'none';
        document.getElementById('modal-signUp').style.display = 'flex';
   
    }

    if (event.target == document.getElementById('signUp')) {
        document.getElementById('modal-signUp').style.display = 'none';
        document.getElementById('modal-signIn').style.display = 'flex';
    }

}