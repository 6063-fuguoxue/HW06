// Visual Musical: Cats
// Prologue: Jellicle Songs for Jellicle Cats lyrics

let lines;
let lineIndex = 0;
let currentLine;
let words;
let wordIndex;
let currentWordList;
let currentLinePart;
let separator = " "; // Separator for Part 1: separate lines into words for animation
let fr = 4; // Set up the framerate for speed control
let bgColorList = [0, 0, "purple", "Lavender", 255, 0]; // Background colors for Part 1
let textColorList = [100, 255, "yellow", "FireBrick", "red", "red"]; // Text colors for Part 1
let positionSeed = 100;

// Part 2 lyrics lines
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

// Load the lyrics in .txt file
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
  // Part 1 of Cats musical. Different background color and text color for every line. Click to see the next line. 
  if (lineIndex < 6) {
    textSize(40);
    textAlign(CENTER, CENTER); // All the lines aligned to the center of the screen
    printLine1(bgColorList[lineIndex], textColorList[lineIndex], currentLine);
  }
  else { // Part 2 of Cats 
    // Since the lyrics form groups of 3, we can let them animate in groups
    let line1, line2, line3;
    
    if (frameCount%2 == 0) { // Slow down the 2nd part of animation; update the canvas once for every two frames
      // Print groups of 3 lines one by one
      if (lineIndex % 3 == 0) { // Step 1: print the 1st line in group
        background(255);
        line1 = currentLine;
        new StylizedLine(height/4, TOP, 60, line1, "OrangeRed").draw();
        lineIndex += 1;
      } else if (lineIndex % 3 == 1) { // Step 2: print the 1st and 2nd lines in group
        background(0);
        line2 = currentLine;
        line1 = lines[lineIndex - 1];
        new StylizedLine(height/4, TOP, 60, line1, "OrangeRed").draw();
        new StylizedLine(height/2, CENTER, 40, line2, 255).draw();
        lineIndex += 1;
      } else { // Step 3: print the 1st and 3rd lines in group, as they both begin with "Jellicles"
        background(255);
        line3 = currentLine;
        // line2 = lines[lineIndex - 1];
        line1 = lines[lineIndex - 2];
        new StylizedLine(height/4, TOP, 60, line1, "OrangeRed").draw();
        // new StylizedLine(height/2, CENTER, 40, line2, 150).draw();
        new StylizedLine(height*3/4, BOTTOM, 100, line3, "OrangeRed").draw();
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