const board = document.getElementById("chess-board");
const files = ['a','b','c','d','e','f','g','h'];

for (let row = 8; row >= 1; row--) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add((row + col) % 2 === 0 ? "white" : "black");
    square.id = files[col] + row; // unique ID like a1, h8
    board.appendChild(square);
  }
}

console.log("Chess board generated successfully!");
