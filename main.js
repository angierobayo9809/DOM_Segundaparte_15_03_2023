let btn = document.querySelector("#btn");

const eventManager = {
    handleEvent: function (ev){
        alert(`Hiciste click: ${ev.target}`);
    }
}

btn.addEventListener("click", eventManager);
