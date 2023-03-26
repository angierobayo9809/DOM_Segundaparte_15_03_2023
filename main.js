let btn = document.querySelector("#btn");

const eventManager = {
    handleEvent: function (ev){
        alert(`Hiciste click: ${ev.type}`);
    }
}

btn.addEventListener("click", eventManager);
