// let s0 = "Are you blind when you're born? ";
// let s1 = "Can you see in the dark? "
// let s = "Can you look at a king? \n Would you sit on his throne? "

let lines;
let lineIndex = 0;
let currentLine;
let words;
let wordIndex;
let currentWordList;
let currentLinePart;
let separator = " ";
let fr = 4; // Set up the framerate for speed control

function preload() {
  lines = loadStrings("./lyrics.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textSize(40);
  // textLeading(50);
  textWrap(WORD);
  textAlign(CENTER, CENTER);
  fill(255);
  frameRate(fr);
}

function printLine(bgColor) {
  background(bgColor);
  words = lines[lineIndex].split(separator);
  if (frameCount < words.length) {
    // Get each word by wordIndex and print them out
    wordIndex = frameCount % words.length;
    currentWordList = subset(words, 0, wordIndex);
    currentLinePart = join(currentWordList, separator);
    text(currentLinePart, 50, 50, width - 50, height - 50);
  }
  else {
    wordIndex = words.length - 1;
    currentWordList = subset(words, 0, wordIndex);
    currentLinePart = join(currentWordList, separator);
    text(currentLinePart, 50, 50, width - 50, height - 50);
  }
}

function draw() {
  currentLine = lines[lineIndex];
  printLine(0, line);
}

function mouseClicked() {
  if (lineIndex < lines.length - 1) {
    lineIndex += 1;
  }
  else {
    lineIndex = 0;
  }
  wordIndex = 0;
  frameCount = 0;
}