let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value 
    lengthEl.textContent = `${baseValue} meters = ${baseValue * meterToFeet.toFixed(3)} feet`
    volumeEl.textContent = `${baseValue} meters = ${baseValue * literToGallon.toFixed(3)} gallon`
    massEl.textContent = `${baseValue} meters = ${baseValue * kilogramToPound.toFixed(3)} pound`

})