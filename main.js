let btn = document.querySelector("#btn");

const eventManager = {
    handleEvent: function (ev){
        if (ev.type == "click")
            this.onClick(ev.type, ev.target);
        else if (ev.type == "mouseleave")
            this.onLeave(ev.type, ev.target);
    },

onClick(type, target){
    alert("Has dado click");
    console.log({type, target});
},

onLeave(type, target){
    alert("Has abandonado el botón");
    console.log({type, target});
}
}

btn.addEventListener("click", eventManager);
btn.addEventListener("mouseleave", eventManager);
