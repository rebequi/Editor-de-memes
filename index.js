// Textos sobre imagen
const topText = document.getElementById("top-text")
const inputTopText = document.getElementById("input-for-top-text")
const bottomText = document.getElementById("bottom-text")
const inputBottomText = document.getElementById("input-for-bottom-text")

// Ocultar textos sobre imagen
const hideTopTextCheckbox = document.getElementById("hide-top-text-checkbox")
const hideTopTextContainer = document.getElementById("top-text-container")
const hideBottomTextCheckbox = document.getElementById("hide-bottom-text-checkbox")
const hideBottomTextContainer = document.getElementById("bottom-text-container")

// Funciones para textos sobre imagen
const topTextDisplayOnImage = (event) => {
  topText.textContent = event.target.value
}

const bottomTextDisplayOnImage = (event) => {
  bottomText.textContent = event.target.value
}

inputTopText.oninput = topTextDisplayOnImage
inputBottomText.oninput = bottomTextDisplayOnImage

// Funciones para ocultar textos sobre imagen
const hideTopText = () => {
  const hideTopTextCheckboxStatus = hideTopTextCheckbox.checked
  if (hideTopTextCheckboxStatus == true) {
    hideTopTextContainer.style.display = "none"
  } 
  else {
    hideTopTextContainer.style.display = "block"
  }
}

hideTopTextCheckbox.onchange = hideTopText

const hideBottomText = () => {
  const hideBottomTextCheckboxStatus = hideBottomTextCheckbox.checked
  if (hideBottomTextCheckboxStatus == true) {
    hideBottomTextContainer.style.display = "none"
  } 
  else {
    hideBottomTextContainer.style.display = "block"
  }
}

hideBottomTextCheckbox.onchange = hideBottomText


////////////////// >>>>>> SELECTORES PARA PANEL DE IMAGEN
const inputURLdeImagen = document.getElementById ("input-for-url")
const contenedorDeMeme = document.getElementById ("meme-image")

// Funcion para agregar URL al input 


inputURLdeImagen.oninput = ()=> {
    contenedorDeMeme.src = inputURLdeImagen.value
}


// ////////////////// >>>>>> SELECTORES PARA CAMBIAR DE PANEL 

const botonParaAbrirPanelDeTexto = document.getElementById ("text-panel-button")
// console.log (botonParaAbrirPanelDeTexto)
const botonParaAbrirPanelDeImagen = document.getElementById ("image-panel-button")
// console.log (botonParaAbrirPanelDeImagen)
const panelDeTexto = document.getElementsByClassName("text")
// console.log(panelDeTexto)

const panelDeImagen = document.getElementsByClassName("image")
// console.log(panelDeImagen)


// quiero abrir el panel de imagen


botonParaAbrirPanelDeImagen.onclick = () =>{
    panelDeImagen.classList.remove("hidden")
}
