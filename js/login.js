const loginBtn = document.getElementById('login-submit');
loginBtn.addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value
    const userPassword = document.getElementById('user-password').value
    
    if(userEmail == 'user@baap.com' && userPassword == 'mdmelonali'){
        window.location.href = 'banking.html'
    }
    else{
        // alert('Entered Your Email and Password')
        const errorMessage = document.getElementById('error-message')
        errorMessage.style.display = 'block'
    }
})