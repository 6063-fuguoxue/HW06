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
let bgColorList = [0, 0, "purple", "Lavender", 255, 0]; 
let textColorList = [100, 255, "yellow", "FireBrick", "red", "red"];
let positionSeed = 100;

class StylizedLine {
  constructor(_y, _v, _tsize, _line, _color) {
    
    this.y = _y;
    this.hAlign = CENTER;
    this.vAling = _v;
    this.txtSize = _tsize;
    this.currentLine = _line;
    this.color = _color;
    this.x = width/2; 
  }
  draw() {
    fill(this.color);
    textAlign(this.hAlign, this.vAling);
    textSize(this.txtSize);
    text(this.currentLine, this.x, this.y);
  }
}

function preload() {
  lines = loadStrings("./lyrics.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textSize(40);
  textWrap(WORD);
  textAlign(CENTER, CENTER);
  frameRate(fr);
  background(255);
  fill(0);
}

function printLine1(bgColor, textColor, currentLine) {
  background(bgColor);
  fill(textColor);
  words = currentLine.split(separator);
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
  if (lineIndex < 6) {
    textSize(40);
    textAlign(CENTER, CENTER);
    printLine1(bgColorList[lineIndex], textColorList[lineIndex], currentLine);
  }
  else {
    let line1, line2, line3;
    // Print every 3 lines one by one on the same canvas
    if (frameCount%2 == 0) { // Slow down the 2nd part of animation
      if (lineIndex % 3 == 0) {
        background(255);
        line1 = currentLine;
        new StylizedLine(height/4, TOP, 60, line1, "OrangeRed").draw();
        lineIndex += 1;
      } else if (lineIndex % 3 == 1) {
        background(0);
        line2 = currentLine;
        line1 = lines[lineIndex - 1];
        new StylizedLine(height/4, TOP, 60, line1, "OrangeRed").draw();
        new StylizedLine(height/2, CENTER, 40, line2, 255).draw();
        lineIndex += 1;
      } else {
        background(255);
        line3 = currentLine;
        line2 = lines[lineIndex - 1];
        line1 = lines[lineIndex - 2];
        new StylizedLine(height/4, TOP, 60, line1, "OrangeRed").draw();
        // new StylizedLine(height/2, CENTER, 40, line2, 150).draw();
        new StylizedLine(height*3/4, BOTTOM, 60, line3, "OrangeRed").draw();
      }
    }
  }
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
  positionSeed = random(0, 200);
}