var user = document.getElementById("user");
var password = document.getElementById("password");
const button = document.getElementById("arbol");

button.addEventListener("click", usuario)


function usuario (){
    localStorage.setItem("user", user.value);
 localStorage.setItem("password", password.value);
}