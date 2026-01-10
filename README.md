# Etch-a-Sketch
A browser-based version of the classic Etch-a-Sketch toy, featuring dynamic grid generation, color modes, and progressive shading effects.
Built as part of the TOP curriculum.

## Live Demo
[text](https://pyrox004.github.io/etch-a-sketch/)

## Features
* **Dynamic Grid Resizing:** Change the drawing area from 1x1 up to 100x100 squares with automatic layout adjustment.
* **Classic Mode:** Draw with a sharp, solid black pen.
* **Rainbow Mode**:** Each square is assigned a randomized RGB color for a vibrant, multi-color effect.
* **Shading Mode:** A progressive darkening tool that adds 10% opacity with every pass, mimicking real-life graphite shading.
* **Eraser:** A targeted tool to revert specific squares back to white.
* **Keyboard Support:** Resize the grid quickly by hitting the Enter key within the input field.

## Technical Implementation

### Architectural Choices
* **CSS Flexbox:** Utilized `display: flex` with `flex-wrap` to manage a responsive grid container.
* **Dynamic Math:** Employed JavaScript to calculate precise pixel dimensions (`px`) for grid squares based on the fixed 960px container size.
* **State Management:** Implemented a global state to track `currentMode` and `opacityCheck`, allowing for a decoupled logic flow in the painting engine.
* **Event Handling:** Utilized `mouseover`, `mousedown`, and `mouseup` events to provide a smooth, click-and-drag user experience.
* **Sub-pixel Accuracy:** Replaced manual `outline` styling with internal `borders` and `box-sizing: border-box` to eliminate rendering artifacts and "shimmering" lines.

### Tech Stack
* **HTML5**
* **CSS3** (Flexbox, Box Model)
* **JavaScript** (ES6+, DOM Manipulation, Event Listeners)

## How to Use
1. Enter a number (1–100) in the input field.
2. Click **Resize Grid** or press **Enter**.
3. Choose a mode (**Black**, **Rainbow**, or **Shading**).
4. Click and drag your mouse over the grid to start creating art!