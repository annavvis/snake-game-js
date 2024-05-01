const board = document.getElementById("game-board");

let snake = [{ x: 10, y: 10 }];

// Draw game map, snake and food
function draw() {
  board.innerHTML = "";
  drawSnake();
}

function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
  });
}

// Create a snake or food cube
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

// Set the position of the snake or the food
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}
