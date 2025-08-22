function encode(text, shift, shiftType) {
  let encodedString = "";
  if (shiftType === "forward") {
    for (let i = 0; i <= text.length - 1; i++) {
      if (text.charCodeAt(i) + shift > 126) {
        return alert("Encoding is not possible with this shift");
      }
      if (text.charAt(i) !== " ") {
        encodedString += String.fromCharCode(text.charCodeAt(i) + shift);
      } else {
        encodedString += " ";
      }
    }
    encodedString = encodedString.trim();
    return encodedString;
  } else {
    for (let i = 0; i <= text.length - 1; i++) {
      if (text.charCodeAt(i) - shift < 33 && text.charAt(i) !== " ") {
        return alert("Encoding is not possible with this shift");
      }
      if (text.charAt(i) !== " ") {
        encodedString += String.fromCharCode(text.charCodeAt(i) - shift);
      } else {
        encodedString += " ";
      }
    }
    encodedString = encodedString.trim();
    return encodedString;
  }
}
