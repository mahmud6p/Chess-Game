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
// Allow pawn to capture diagonally
function pawnCapture(square, target) {
  // logic for diagonal capture
}

// Validate pawn moves
function validatePawnMove(square, target) {
  // check if move is legal
}

// Integrate pawn moves into main game loop
function handlePawnMove(square, target) {
  if (validatePawnMove(square, target)) {
    // execute move
  }
}


// Add rook pieces on board
function setupRooks() {
  document.getElementById("a1").innerText = "♖";
  document.getElementById("h1").innerText = "♖";
  document.getElementById("a8").innerText = "♜";
  document.getElementById("h8").innerText = "♜";
}
setupRooks();

// Allow rook to move horizontally
function rookHorizontalMove(square, target) {
  // logic for horizontal move
}

// Allow rook to move vertically
function rookVerticalMove(square, target) {
  // logic for vertical move
}

// Validate rook moves
function validateRookMove(square, target) {
  // check if move is legal
}

// Allow rook to capture pieces
function rookCapture(square, target) {
  // logic for rook capture
}
// Integrate rook moves into main game loop
function handleRookMove(square, target) {
  if (validateRookMove(square, target)) {
    // execute move
  }
}


// Add knight pieces on board
function setupKnights() {
  document.getElementById("b1").innerText = "♘";
  document.getElementById("g1").innerText = "♘";
  document.getElementById("b8").innerText = "♞";
  document.getElementById("g8").innerText = "♞";
}
setupKnights();

// Allow knight to move in L-shape
function knightMove(square, target) {
  // logic for L-shape move
}
// Validate knight moves
function validateKnightMove(square, target) {
  // check if move is legal
}

// Allow knight to capture pieces
function knightCapture(square, target) {
  // logic for knight capture
}

// Knight can jump over pieces
function knightJump(square, target) {
  // logic for jumping over other pieces
}

// Integrate knight moves into main game loop
function handleKnightMove(square, target) {
  if (validateKnightMove(square, target)) {
    // execute move
  }
}
// Add bishop pieces on board
function setupBishops() {
  document.getElementById("c1").innerText = "♗";
  document.getElementById("f1").innerText = "♗";
  document.getElementById("c8").innerText = "♝";
  document.getElementById("f8").innerText = "♝";
}
setupBishops();

// Allow bishop to move diagonally
function bishopDiagonalMove(square, target) {
  // logic for diagonal move
}

// Validate bishop moves
function validateBishopMove(square, target) {
  // check if move is legal
}
