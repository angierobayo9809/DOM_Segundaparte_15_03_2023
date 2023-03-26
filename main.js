let btn = document.querySelector("#btn");

btn.addEventListener("click", (e)=>{
    console.log("Hice click");
});

btn.addEventListener("mouseover", (e)=>{
    console.log("Me paré sobre el botón");
});

btn.addEventListener("mouseout", (e)=>{
    console.log("Me paré fuera del botón");
});

btn.addEventListener("focus", (e)=>{
    console.log("Estoy seleccionando el botón");
})
