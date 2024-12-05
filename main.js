
class Projet {
    static allProjets=[]
    constructor(titre, description){
        this.titre = titre
        this.description = description

        Projet.allProjets.push(this)
    }

    static getAllProjets() {
        return Projet.allProjets
    }
}

const ugur = new Projet('UGUR','UGUR is a video game made with Unity for a university project. We were a group of 4 students to make it.')
const lettricide = new Projet('Lettricide','dzq')
const botanic = new Projet('Botanic','dzq')



const workList = document.querySelector("#workList")
Projet.getAllProjets().forEach(projet => {
    let oneWork = document.createElement("div")
    let h3 = document.createElement("h3")
    let p = document.createElement("p")
    oneWork.classList.add("oneWork")
    h3.innerHTML = projet.titre
    p.innerHTML = projet.description
    workList.appendChild(oneWork)
    oneWork.appendChild(h3)
    oneWork.appendChild(p)
}); 



