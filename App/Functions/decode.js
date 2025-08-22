function decode(text, shift, shiftType) {
  let decodedString = "";
  if (shiftType === "forward") {
    for (let i = 0; i <= text.length - 1; i++) {
      if (text.charAt(i) !== " ") {
        decodedString += String.fromCharCode(text.charCodeAt(i) - shift);
      } else {
        decodedString += " ";
      }
    }
    decodedString = decodedString.trim();
    return decodedString;
  } else {
    for (let i = 0; i <= text.length - 1; i++) {
      if (text.charAt(i) !== " ") {
        decodedString += String.fromCharCode(text.charCodeAt(i) + shift);
      } else {
        decodedString += " ";
      }
    }
    decodedString = decodedString.trim();
    return decodedString;
  }
}
