let btn = document.querySelector("#btn");

const eventManager = {
    handleEvent: function (ev){
        if (ev.type == "click")
            alert(`Hiciste click`);
        else if (ev.type == "mouseleave")
            alert(`Has abandonado el botón`);
    }
}

btn.addEventListener("click", eventManager);
btn.addEventListener("mouseleave", eventManager);
