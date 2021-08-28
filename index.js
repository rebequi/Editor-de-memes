// ////////////////// >>>>>> SELECTORES PARA CAMBIAR DE PANEL 
const buttonForTextPanel = document.getElementById ("text-panel-button")
const buttonForImagePanel = document.getElementById ("image-panel-button")
const imagePanel = document.getElementById("panel-for-image")
const textPanel = document.getElementById("panel-for-text")

////////////////// >>>>>> SELECTORES PARA PANEL DE IMAGEN
const inputURLofImage = document.getElementById ("input-for-url")
const memeImage = document.getElementById ("meme-image")
const inputForBlendMode = document.getElementById ("blend-input")
const backgroundColorInput = document.getElementById("color-for-background")
const panelButtonDarkMode = document.getElementById("dark-mode")

// Textos sobre imagen
const topText = document.getElementById("top-text")
const inputTopText = document.getElementById("input-for-top-text")
const bottomText = document.getElementById("bottom-text")
const inputBottomText = document.getElementById("input-for-bottom-text")
const fontFamilySelect = document.getElementById("font-family-select")
const inputFontSize = document.getElementById("font-size-input")
const inputSpacing = document.getElementById("spacing")
const selectLineHeight = document.getElementById("line-height")

// Ocultar textos sobre imagen
const hideTopTextCheckbox = document.getElementById("hide-top-text-checkbox")
const hideTopTextContainer = document.getElementById("top-text-container")
const hideBottomTextCheckbox = document.getElementById("hide-bottom-text-checkbox")
const hideBottomTextContainer = document.getElementById("bottom-text-container")

// Variables de justificar textos
const buttonAlignLeft = document.getElementById("text-left-align-button")
const buttonAlignCenter = document.getElementById("text-center-align-button")
const buttonAlignRight = document.getElementById("text-right-align-button")
const buttonOutlineNone = document.getElementById("outline-none-button")
const buttonOutlineLight = document.getElementById("outline-light-button")
const buttonOutlineDark = document.getElementById("outline-dark-button")

// Variables de colores
const textColorInput = document.getElementById("text-color-input")
const textColorCode = document.getElementById("text-color")
const backgroundColorInputText = document.getElementById("background-color-input")
const backgroundColorCode = document.getElementById("background-color")
const hideBackgroundColor = document.getElementById("no-background-color")

// Funciones para seleccionar panel - estado active
// buttonForImagePanel.onclick = () => {
//   alert("hola")
// }


// Funciones para textos sobre imagen
const topTextDisplayOnImage = (event) => {
  topText.textContent = event.target.value
}

const bottomTextDisplayOnImage = (event) => {
  bottomText.textContent = event.target.value
}

inputTopText.oninput = topTextDisplayOnImage
inputBottomText.oninput = bottomTextDisplayOnImage

// Funcion para ocultar textos sobre imagen

hideTopTextCheckbox.onchange = () => hideText("top")
hideBottomTextCheckbox.onchange = () => hideText("bottom")

const hideText = (posicion) => {
  if (posicion === "top") {
    const hideTopTextCheckboxStatus = hideTopTextCheckbox.checked
    if (hideTopTextCheckboxStatus == true) {
      hideTopTextContainer.style.display = "none"
    } 
    else {
      hideTopTextContainer.style.display = "block"
    }
  }
  else {
    const hideBottomTextCheckboxStatus = hideBottomTextCheckbox.checked
    if (hideBottomTextCheckboxStatus == true) {
      hideBottomTextContainer.style.display = "none"
    } 
    else {
      hideBottomTextContainer.style.display = "block"
    }
  }
}

// Funcion para cambio de fonts
const fontFamily = (event) => {
  const selectedFont = event.target.value
  topText.style.fontFamily = selectedFont
  bottomText.style.fontFamily = selectedFont
}

fontFamilySelect.onchange = fontFamily

// Funcion para cambio de tamaño de texto
const fontSize = (event) => {
  const fontSizeValue = event.target.value
  topText.style.fontSize = fontSizeValue + "px"
  bottomText.style.fontSize = fontSizeValue + "px"
}

inputFontSize.onchange = fontSize

// Funcion de botones para justificar texto
buttonAlignLeft.onclick = () => textAlignButtons("left")
buttonAlignCenter.onclick = () => textAlignButtons("center")
buttonAlignRight.onclick = () => textAlignButtons("right")

const textAlignButtons = (selected) => {
  topText.style.textAlign = selected
  bottomText.style.textAlign = selected
}


// Funcion para cambio de color en font
const fontColor = (event) => {
  const colorCode = textColorInput.value
  topText.style.color = colorCode
  bottomText.style.color = colorCode
  textColorCode.textContent = event.target.value
}

textColorInput.oninput = fontColor

// Funcion para cambio de color en fondo
const bgColor = (event) => {
  const bgColorCode = backgroundColorInputText.value
  topText.style.backgroundColor = bgColorCode
  bottomText.style.backgroundColor = bgColorCode
  backgroundColorCode.textContent = event.target.value
}

backgroundColorInputText.oninput = bgColor

// Funcion para fondo transparente
const transparentBackground = () => {
  const transparentBackgroundStatus = hideBackgroundColor.checked
  const bgColorCode = backgroundColorInputText.value
  if (transparentBackgroundStatus == true) {
    topText.style.backgroundColor = "transparent"
    bottomText.style.backgroundColor = "transparent"
  }
  else {
    topText.style.backgroundColor = bgColorCode
    bottomText.style.backgroundColor = bgColorCode
  }
}

hideBackgroundColor.oninput = transparentBackground


// Funcion para contorno de copy
buttonOutlineNone.onclick = () => outlineBorder("none")
buttonOutlineLight.onclick = () => outlineBorder("light")
buttonOutlineDark.onclick = () => outlineBorder("dark")

const outlineBorder = (mode) => {
  if (mode === "none") {
    topText.style.textShadow = "none"
    bottomText.style.textShadow = "none"
  }
  if (mode === "light") {
    topText.style.textShadow = "-2px -2px 0 #FFF, 2px -2px 0 #FFF, -2px 2px 0 #FFF, 2px 2px 0 #FFF"
    bottomText.style.textShadow = "-2px -2px 0 #FFF, 2px -2px 0 #FFF, -2px 2px 0 #FFF, 2px 2px 0 #FFF"
  }
  if (mode === "dark") {
    topText.style.textShadow = "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
    bottomText.style.textShadow = "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
  }
}

// Funcion para espaciado de texto
const inputSpacingValue = (space) => {
  const backgroundSizeValue = space.target.value
  topText.style.padding = backgroundSizeValue + "px"
  bottomText.style.padding = backgroundSizeValue + "px"
}

inputSpacing.onchange = inputSpacingValue

// Funcion de espaciado
const lineHeight = (space) => {
  const lineHeightValue = selectLineHeight.value
  topText.style.lineHeight = lineHeightValue
  bottomText.style.lineHeight = lineHeightValue
}

selectLineHeight.onchange = lineHeight


// Funcion para abrir el panel de Imagen

const showImagePanel = () => {
    const textPanelIsOn = textPanel.style.display = "block"
    if (textPanelIsOn) {
        imagePanel.style.display = "block"
        textPanel.style.display = "none"
        buttonForImagePanel.classList.add("button-active")
        buttonForTextPanel.classList.remove("button-active")
    }
}

buttonForImagePanel.onclick = showImagePanel

// Funcion para abrir el panel de Texto

const showTextPanel = () => {
    const ImagePanelIsOn = imagePanel.style.display = "block"
    if (ImagePanelIsOn) {
        textPanel.style.display = "block"
        imagePanel.style.display = "none"
        buttonForTextPanel.classList.add("button-active")
        buttonForImagePanel.classList.remove("button-active")
    }

}

buttonForTextPanel.onclick = showTextPanel


// Funcion para agregar URL al input 

inputURLofImage.oninput = () => {
  memeImage.style.backgroundImage = `url("${inputURLofImage.value}")`
}

// Funcion para agregar modos de fondo a la imagen

backgroundColorInput.oninput = () => {
  memeImage.style.backgroundColor = backgroundColorInput.value
}

inputForBlendMode.onchange = () => {
  if (inputForBlendMode.value === "lighten") {
    memeImage.style.backgroundBlendMode = "lighten"
  }
  else if (inputForBlendMode.value === "none") {
    memeImage.style.backgroundBlendMode = "normal"
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

// >>>>>>  Selectores para filtros 

const inputBrightness = document.getElementById ("brightness-slider")
const inputOpacity = document.getElementById ("opacity-slider")
const inputContrast = document.getElementById ("contrast-slider")
const inputBlur = document.getElementById ("blur-slider")
const inputGrayScale = document.getElementById ("grayscale-slider")
const inputHue = document.getElementById ("hue-slider")
const inputSepia = document.getElementById ("sepia-slider")
const inputSaturation = document.getElementById ("saturation-slider")
const inputNegative = document.getElementById ("negative-slider")


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

// Funcion boton para reestablecer los filtros 

const removeFiltersButton = document.getElementById("go-back-button")

const removeFilters = () => {
  const inputForBrightnessIsOn = inputBrightness.onchange
  const inputForOpacityIsOn = inputOpacity.onchange
  const inputForContrastIsOn = inputContrast.onchange
  const inputForBlurIsOn = inputBlur.onchange
  const inputForGrayScaleIsOn = inputGrayScale.onchange
  const inputForSepiaIsOn = inputSepia.onchange
  const inputForHueIsOn = inputHue.onchange
  const inputForSaturationIsOn = inputSaturation.onchange
  const inputForNegativeIsOn = inputNegative.onchange

    if (inputForBrightnessIsOn || inputForOpacityIsOn ||inputForContrastIsOn ||
      inputForBlurIsOn || inputForGrayScaleIsOn || inputForSepiaIsOn || inputForHueIsOn ||
      inputForSaturationIsOn || inputForNegativeIsOn ) {
    memeImage.style.filter = "none"
    inputBrightness.value = "1"
    inputOpacity.value = "1"
    inputContrast.value = "0"
    inputBlur.value = "0"
    inputGrayScale.value = "0"
    inputSepia.value = "0"
    inputHue.value = "0"
    inputSaturation.value = "1"
    inputNegative.value = "1"
  }
      
  }
  
removeFiltersButton.onclick = removeFilters

// Funcion boton para descargar la imagen

const memeContainer = document.querySelector(".image-container")
const downloadButton = document.getElementById ("container-for-button")

downloadButton.onclick = () => {
  domtoimage.toBlob(memeContainer)
  .then(function (blob) {
      window.saveAs(blob, 'meme.png');
  });

}