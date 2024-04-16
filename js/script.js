
const loginButton = document.getElementById('loginButton');
const userId = document.getElementById('userId');
var user = '123456';

userId.addEventListener('change',(e)=>{
    user=(e.currentTarget.value);
})


function handleLogin(){
   
   alert('Your user ID is :', user) 
}

loginButton.addEventListener('click',handleLogin)