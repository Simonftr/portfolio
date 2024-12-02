let background = document.querySelector("#background")
document.addEventListener("mousemove", event => {
    background.style.background = "radial-gradient(circle at "+event.clientX+"px "+event.clientY+"px,rgb(200, 0, 255,0.25),rgb(25, 25, 25)";
}
)
/* 
let cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", event => {
    cursor.style.top = event.clientY+"px";
    cursor.style.left = event.clientX+"px";
}
) */

let homeButton = document.querySelector("#homeButton").addEventListener("click", event => {
    window.location.href = 'index.html'; 

})

projet = {
    'titre': "test"
}