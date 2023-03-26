let btn = document.querySelector("#btn");

const eventManager = {
    handleEvent: function (ev){
        alert(`Hiciste click: ${ev.ctrlKey}`);
    }
}

btn.addEventListener("click", eventManager);
