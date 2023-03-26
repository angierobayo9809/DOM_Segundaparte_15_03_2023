let btn = document.querySelector("#btn");
const doTask  = () => alert("Ha presionado el botón y ejecutado la función.");

btn.setAttribute("onclick", "doTask()");