// Texto superior
let topText = document.getElementById("top-text")
let inputTopText = document.getElementById("input-for-text")

let topTextDisplayOnImage = (event) => {
  topText.textContent = event.target.value
}

inputTopText.oninput = topTextDisplayOnImage