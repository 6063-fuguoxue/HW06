let s0 = "Are you blind when you born? ";

let words;
let currentWordList;
let currentLine;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255);

  words = s0.split(" ");
}

function draw() {
  background(0);
  // Get each word by wordIndex and print them out
  let wordIndex = second() % words.length;
  currentWordList = subset(words, 0, wordIndex);
  currentLine = join(currentWordList, " ");
  text(currentLine, width / 2, height / 2);

}
