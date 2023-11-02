const username=document.querySelector('#username')
const login=document.querySelector('.login')
const message=document.querySelector('.message')
const password=document.querySelector('#password')
const msgpwd=document.querySelector('.msgpwd')
// login.onclick=loginProcess

login.addEventListener('click',loginProcess)

function check(event){
    event.preventDefault()
     console.log(username.value)
    
}

function checker(event){
    event.preventDefault()
    console.log(username.value)
}

function loginProcess(event){
    event.preventDefault()
    console.log(username.value)
}

username.onfocus=focus
password.onfocus=focus

username.onblur=function(event){
    if(username.value.length==0)
    {
        message.innerText="You must enter your username"
    }
}

function focus(event){
    console.log(event.target.tagName)
    event.target.style.backgroundColor='red'
    let element=event.target
    if(element.hasAttribute('type'))
    {
        let value=element.getAttribute('type')
        console.log(value)
        if(value=='text')
        {
            message.innerText="Fill your username (email)"
        }
       else{
        msgpwd.innerText="Fill your password (max 8 charcaters)"
       }
    }
    
    
}


