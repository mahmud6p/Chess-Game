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

// Add pawn pieces on board
function setupPawns() {
  for (let col = 0; col < 8; col++) {
    document.getElementById(files[col] + 2).innerText = "♙"; // White pawns
    document.getElementById(files[col] + 7).innerText = "♟"; // Black pawns
  }
}
setupPawns();

// Allow pawn to move forward by 1 step
function pawnSingleMove(square, target) {
  // logic for single step forward
}
// Allow pawn to move forward by 2 steps from initial position
function pawnDoubleMove(square, target) {
  // logic for double step forward
}
