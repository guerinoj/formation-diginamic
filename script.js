
const button = document.querySelector("button")

button.addEventListener('click', (e) =>{
  e.preventDefault()
  console.log("Je suis dans un écouteur d'évenement")
  let saisie = document.querySelector('#saisie')

  /*
  let div = document.createElement("div")
  div.textContent = saisie.value

  document.querySelector("#affichage").appendChild(div)*/

  document.querySelector("#affichage").innerHTML = `<div class="container">${saisie.value}</div>`
})
