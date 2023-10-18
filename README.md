# HW06 Notes
This week's assignment is to draw with text. The text I picked is lyrics from [**Cats**](https://www.allmusicals.com/lyrics/cats/prologuejelliclesongsforjelliclecats.htm). **Cats** is a musical written by Andrew Lloyd Webber, and is one of my favorite musicals. Its world premiere was at the New London Theatre in 1981. 

I called my project a visual musical because my goal is to visualize the musical performance with pure text animation. My main focus is the rhythms and meaning of the text, which are transformed into the pace of the animation and the text color. 

## Ideation
For this project, since it only involves text, I used PowerPoint slides to do sketching. Below are some of the sketches. You may also find the [slides](./HW06Sketches.pptx) in this repository. 

![Sketch 1](./Slide1.PNG)
![Sketch 10](./Slide10.PNG)

For the first part of the animation (slides 1 to 9), I want the words to print out one by one. For the second part, since the lyrics form groups of 3 lines, I want to put 3 lines on the canvas one by one for each group. The viewer can interact with the screen by mouse clicks. After one animation, the viewer needs to click the mouse to see the next animation. 

## Implementation
### Initialization
To start with, the code initializes a `lineIndex` variable, which stores the index of the current line to animate. The mouse interaction is handled by the `mouseClicked()` function written at the end of the code. 

The lyrics I use are saved in a .txt file named lyrics.txt. They are separated into several lines so that it is easy to process them later with codes. The .txt file is preloaded by the `preload()` function. 

In the `setup()` function, I initialized text-related properties like text font and text size. I also set the frame rate to 4, because I want to use it for animation speed control. 

### Part 1
First, the `draw()` function gets the `currentLine` to animate from the .txt file. Then, the first part of the animation is achieved by the `printLine1` function. In this function, a `bgColorList` and a `textColorList` are preset for each line in part 1 animation. Then, the current line is split into a list of words and animated out one by one at the rate of 4 words per second (same as the frame rate). When all the words in the current line are printed out, the text stays on the canvas and waits for a mouse click from the viewer. 

### Part 2
