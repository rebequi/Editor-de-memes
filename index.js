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
const memeImage = document.getElementById ("meme-image")
const inputForBlendMode = document.getElementById ("blend-input")
const backgroundColorInput = document.getElementById("color-for-background")


// Funcion para agregar URL al input 

inputURLofImage.oninput = () => {
  memeImage.style.backgroundImage = `url("${inputURLofImage.value})"`
  
}

// Funcion para agregar modos de fondo a la imagen


backgroundColorInput.oninput = () => {
  memeImage.style.backgroundColor = backgroundColorInput.value
}

inputForBlendMode.onchange = () => {
  if (inputForBlendMode.value === "lighten") {
    memeImage.style.backgroundBlendMode = "lighten"
  }
  else if (inputForBlendMode.value === "dark") {
    memeImage.style.backgroundBlendMode = "darken"
  }
  else if (inputForBlendMode.value === "sharpen") {
    memeImage.style.backgroundBlendMode = "difference"
  }
  else if (inputForBlendMode.value === "clarity") {
    memeImage.style.backgroundBlendMode = "luminosity"
  }
  else if (inputForBlendMode.value === "multiply") {
    memeImage.style.backgroundBlendMode = "multiply"
  }
}


// // Funcion para agregar filtros a la imagen

// selectores para filtros !

const inputBrightness = document.getElementById ("brightness-slider")
const inputOpacity = document.getElementById ("opacity-slider")
const inputContrast = document.getElementById ("contrast-slider")
const inputBlur = document.getElementById ("blur-slider")
const inputGrayScale = document.getElementById ("grayscale-slider")
const inputHue = document.getElementById ("hue-slider")
const inputSepia = document.getElementById ("sepia-slider")
const inputSaturation = document.getElementById ("saturation-slider")
const inputNegative = document.getElementById ("negative-slider")


console.log (inputSaturation)

// LOGRAR HACER CAMBIOS EN EL INPUT !!!!!


// const escucharCambiosdeBrillo = () => {
//   console.log (inputBrightness.value)
// }
// inputBrightness.onchange = escucharCambiosdeBrillo

inputBrightness.onchange = () => {
  memeImage.style.filter = `brightness(${inputBrightness.value})`
}

inputOpacity.onchange = () => {
  memeImage.style.filter = `opacity(${inputOpacity.value})`
}

inputContrast.onchange = () => {
  console.log (inputContrast.value)
  memeImage.style.filter = `contrast(${inputContrast.value}%)`
}

inputBlur.onchange = () => {
  memeImage.style.filter = `blur(${inputBlur.value}px)`
}

inputGrayScale.onchange = () => {
  memeImage.style.filter = `grayscale(${inputGrayScale.value})`
}

inputGrayScale.onchange = () => {
  memeImage.style.filter = `grayscale(${inputGrayScale.value})`
}

inputSepia.onchange = () => {
  memeImage.style.filter = `sepia(${inputSepia.value})`
}

inputHue.onchange = () => {
  memeImage.style.filter = `hue-rotate(${inputHue.value}deg)`
}

inputSaturation.onchange = () => {
  memeImage.style.filter = `saturate(${inputSaturation.value}%)`
}

inputNegative.onchange = () => {
  memeImage.style.filter = `invert(${inputNegative.value})`
}


//  Quiero hacer una sintaxis con if
// if (inputBrightness.value) {
//   console.log ("hay cambios en el input de brillo")
// }


// Funcionalidad de Reestablecer Filtros



