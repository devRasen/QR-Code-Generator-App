// Project Name: QR Code Generator App
// Author: devRasen
// Github: https://github.com/devRasen

// get the DOM elements
const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");

// add click event to generate button
generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;

  // check if there is a value or not
  if (!qrValue) return;
  generateBtn.innerText = "Generating QR Code...";

  // generate qr code image
  let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImg.src = apiUrl;

  // Reset the generate button
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});
