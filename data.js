document.addEventListener("DOMContentLoaded", () => {
    showData() 
 });

const data ={
    "name": "Andrea",
    "age": 24,
    "phones": {
        "type": "celular",
        "number": "3022959316"
    },
    "email": "andrea@gmail.com"
}


const showData = ()=>{
    const container = document.getElementById("container");

    // let name = document.createElement("li");
    let name =  document.createElement("li");
    name.textContent = `Nombre: ${data.name}`
    container.appendChild(name);

    let age =  document.createElement("li");
    age.textContent = `Edad: ${data.age}`
    container.appendChild(age);

    let phone = document.createElement("li");
    phone.textContent = `Tipo de Telefono: ${data.phones.type}`
    container.appendChild(phone);

    let number = document.createElement("li");
    number.textContent = `Numero: ${data.phones.number}`
    container.appendChild(number);

    let email = document.createElement("li");
    email.textContent = `Numero: ${data.email}`
    container.appendChild(email);


}
