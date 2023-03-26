let btn = document.querySelector("#btn");

const eventManager = {
    handleEvent: function (ev){
        alert("Hiciste click");
    }
}

btn.addEventListener("click", eventManager);
