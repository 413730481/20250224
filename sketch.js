function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#ffc8dd");
  let offsetX = mouseX % 200;
  let offsetY = mouseY % 200;

  for (let i = -200; i < width + 200; i += 200) {
    for (let j = -200; j < height + 200; j += 200) {
      let x = i + offsetX;
      let y = j + offsetY;
      
      // Draw square
      fill("#ffafcc");
      rect(x - 100, y - 100, 200, 200);
      
      // Draw circle
      fill("#ffb3c1");
      ellipse(x, y, 200, 200);
    }
  }
}
