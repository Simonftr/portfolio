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



const projetsBox = document.querySelector("#projetsBox")

projet1 = {
    'titre': "projet1",
    'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue."
}
projet2 = {
    'titre': "projet2",
    'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue."
}
projet3 = {
    'titre': "projet3",
    'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue."
}
projet4 = {
    'titre': "projet4",
    'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue."
}
projet5 = {
    'titre': "projet5",
    'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue."
}


projets = []
projets.push(projet1)
projets.push(projet2)
projets.push(projet3)
projets.push(projet4)
projets.push(projet5)

projets.forEach(projet => {
    let projetDiv = document.createElement("li")
    let photo = document.createElement("img")
    let detailsDiv = document.createElement("div")
    projetDiv.classList.add("projet")
    detailsDiv.classList.add("detailsProjet")
    projetDiv.innerHTML = projet["titre"]
    projetsBox.appendChild(projetDiv)
    projetDiv.appendChild(photo)
    projetDiv.appendChild(detailsDiv)
});



