const input = document.querySelector("#textInput");
const manipulateTextButton = document.querySelector("#manipulateTextButton");
const manipulateSelection = document.querySelector("#encodeOrDecode");
const encodeOrDecodeHelpText = document.querySelector(
  "#encodeOrDecodeHelpText"
);
const shift = document.querySelector("#shiftInput");
const shiftType = document.querySelector("#shiftType");
const showText = document.querySelector("#showText");
let inputText;
let shiftValue;
manipulateSelection.addEventListener("change", () => {
  manipulateTextButton.innerText = manipulateSelection.value;
  if (manipulateSelection.value === "Encode") {
    encodeOrDecodeHelpText.innerText = "in the"; // encode with a shift of {shift} in the {direction} direction
  } else {
    encodeOrDecodeHelpText.innerText = "encoded in the"; // decode with a shift of {shift} encoded in the {direction} direction
  }
});
manipulateTextButton.addEventListener("click", () => {
  inputText = input.value.trim();
  shiftValue = Number.parseInt(shift.value);
  console.log(shiftValue);
  if (inputText !== "" && shift.value !== "") {
    if (isNaN(shift.value)) {
      return alert("Enter a valid shift value");
    }
    if (manipulateSelection.value === "Encode") {
      let encodedString = encode(inputText, shiftValue, shiftType.value);
      encodedString !== undefined ? (showText.innerText = encodedString) : null;
    } else {
      console.log(shiftType.value);
      let decodedString = decode(inputText, shiftValue, shiftType.value);
      decodedString !== undefined ? (showText.innerText = decodedString) : null;
    }
  }
});
showText.addEventListener("click", async () => {
  const text = showText.innerText.trim();
  await navigator.clipboard.writeText(text);
  alert("Text copied");
});
