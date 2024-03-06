let passwordEl = document.getElementById("password")
let emailEl = document.getElementById("email")
let fullnameEl = document.getElementById("full_name")

function display(){
let object={
    password: passwordEl.value,
    email : emailEl.value,
    fullname : fullnameEl.value
}
console.log(object);
}   