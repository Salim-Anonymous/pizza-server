//function to send login data to the server for authentication
function login(){
    const email=document.getElementById("email-login").value;
    const password=document.getElementById("password-login").value;
    const data={
        "email": email,
        "password": password
    }
    const xhttp=new XMLHttpRequest();
    xhttp.open("POST","/api/users/authenticate",true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(data));
    xhttp.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            localStorage.setItem("user",JSON.stringify(this.responseText));
        }else{
            alert("Invalid email or password");
        }
    }
}