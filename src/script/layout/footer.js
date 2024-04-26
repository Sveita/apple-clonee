const btn = document.getElementById("btn1");
const arrow = document.getElementById("arrow1");
const container = document.getElementById("container1");

    function dropDown () {
        arrow.classList.toggle("rotate-180");
        container.classList.toggle("hidden")
    }
    btn.addEventListener("click", dropDown)