const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    //get the values from the input
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === ''){
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else{
        // add success class
        setSuccessFor(username);
    }

    // email validation with extra Regex checkup
    if(emailValue === ""){
        
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Not a valid email');
    }
     else{
        setSuccessFor(email);
    }

    // password valildation

    if (passwordValue === ""){
        setErrorFor(password, "Password cannot be blank")
    } else{
        setSuccessFor(password);
    }
    // confirm password validation
    if (password2Value === ""){
        setErrorFor(password2, "Confirm password cannot be blank")
    }else if (passwordValue !== password2Value){
        setErrorFor(password2, "Password does not match")
    }
     else{
        setSuccessFor(password2);
    }    
}

function setErrorFor(input, message){
    const formControl = input.parentElement // .form-control
    const small = formControl.querySelector('small')

    // add error message inside small tag
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    // add success class
    const formControl = input.parentElement
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}