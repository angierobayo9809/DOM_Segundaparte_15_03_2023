let btn = document.querySelector("#btn");

btn.addEventListener("click", ()=> alert("dio clic al botón"));
btn.addEventListener("click", ()=> btn.classList.toggle("red"), "capture");
btn.addEventListener("click", ()=> btn.classList.toggle("biggest"));