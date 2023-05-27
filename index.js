const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);
const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  "!": 27,
  "@": 28,
  "#": 29,
  $: 30,
  "%": 31,
  "^": 32,
  "&": 33,
  "*": 34,
  "(": 35,
  ")": 36,
  "-": 37,
  "+": 38,
  "=": 39,
  "{": 40,
  "}": 41,
  "[": 42,
  "]": 43,
  ":": 44,
  ";": 45,
  "<": 46,
  ">": 47,
  ",": 48,
  ".": 49,
  "?": 50,
  "/": 51,
  1: 52,
  2: 53,
  3: 54,
  4: 55,
  5: 56,
  6: 57,
  7: 58,
  8: 59,
  9: 60,
  0: 61,
};

rl.question("Enter your string: ", (string) => {
  let array = [...string];
  let s = " ";

  array.forEach((value) => {
    if (value === " ") {
      s += "  ";
    } else {
      s += object[value.toLowerCase()] + " ";
    }
  });
  console.log("Your encoded text is: " + s);
  rl.close();
});
