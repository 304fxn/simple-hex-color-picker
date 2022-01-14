const colorName = document.querySelector(".color-name");
const inputHexCode = document.getElementById("inputHexCode");
const boxColor = document.getElementById("color-changed-box");

inputHexCode.addEventListener("input", function () {
  let hexCode = inputHexCode.value;
  if (!hexCode.includes("#")) {
    return (colorName.textContent =
      "Your code is not valid. Please include # ");
  } else {
    //document.body.style.backgroundColor = inputHexCode.value;
    colorName.textContent = " ";
    boxColor.style.backgroundColor = inputHexCode.value;
  }
});
