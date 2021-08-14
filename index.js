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


// ////////////////// >>>>>> SELECTORES PARA CAMBIAR DE PANEL 

const buttonForTextPanel = document.getElementById ("text-panel-button")
const buttonForImagePanel = document.getElementById ("image-panel-button")
const imagePanel= document.getElementById("panel-for-image")
const textPanel= document.getElementById("panel-for-text")

// Funcion para abrir el panel de Imagen

const showImagePanel = () => {
    const textPanelIsOn = textPanel.style.display = "block"
    if (textPanelIsOn) {
        imagePanel.style.display = "block"
        textPanel.style.display = "none"
    }
}

// Funcion para abrir el panel de Texto

const showTextPanel = () => {
    const ImagePanelIsOn = imagePanel.style.display = "block"
    if (ImagePanelIsOn) {
        textPanel.style.display = "block"
        imagePanel.style.display = "none"
    }
}

buttonForImagePanel.onclick = showImagePanel
buttonForTextPanel.onclick = showTextPanel

////////////////// >>>>>> SELECTORES PARA PANEL DE IMAGEN
const inputURLofImage = document.getElementById ("input-for-url")
const memeContainer = document.getElementById ("meme-image")
console.log (memeContainer)

// Funcion para agregar URL al input 

inputURLofImage.oninput = ()=> {
    memeContainer.src = inputURLofImage.value
}


