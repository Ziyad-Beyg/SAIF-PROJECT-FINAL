
let emailEl 
let usernameEl 
let emailErrorEl
let usernameErrorEl

function productPage(){

    emailEl = document.getElementById('email').value
    usernameEl = document.getElementById('username').value
    emailErrorEl = document.getElementById('emailError')
    usernameErrorEl = document.getElementById('usernameError')

    console.log(emailEl, usernameEl)

    if(emailEl == ''){
        setTimeout(()=>{
            emailErrorEl.style.display = "block"
        },1)
        setTimeout(()=>{
            emailErrorEl.style.display = "none"
        },3000)
    }
    else if(usernameEl == ''){
        setTimeout(()=>{
            usernameErrorEl.style.display = "block"
        },1)
        setTimeout(()=>{
            usernameErrorEl.style.display = "none"
        },3000)
    }
    else if(emailEl != "" && usernameEl != ""){
        window.location.href = './Pages/Product.html'
    }

    emailEl = ''
    usernameEl = ''
    console.log(emailEl, usernameEl)

}