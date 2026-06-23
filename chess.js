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

// Allow bishop to capture pieces
function bishopCapture(square, target) {
  // logic for bishop capture
}

// Ensure bishop path is clear
function bishopPathClear(square, target) {
  // logic to check path
}

// Integrate bishop moves into main game loop
function handleBishopMove(square, target) {
  if (validateBishopMove(square, target)) {
    // execute move
  }
}

// Add queen pieces on board
function setupQueens() {
  document.getElementById("d1").innerText = "♕";
  document.getElementById("d8").innerText = "♛";
}
setupQueens();

// Allow queen to move horizontally
function queenHorizontalMove(square, target) {
  // logic for horizontal move
}

// Allow queen to move vertically
function queenVerticalMove(square, target) {
  // logic for vertical move
}

// Allow queen to move diagonally
function queenDiagonalMove(square, target) {
  // logic for diagonal move
}

// Validate queen moves
function validateQueenMove(square, target) {
  // check if move is legal
}

// Integrate queen moves into main game loop
function handleQueenMove(square, target) {
  if (validateQueenMove(square, target)) {
    // execute move
  }
}



// Add king pieces on board
function setupKings() {
  document.getElementById("e1").innerText = "♔";
  document.getElementById("e8").innerText = "♚";
}
setupKings();

// Allow king to move one step in any direction
function kingMove(square, target) {
  // logic for one-step move
}

// Validate king moves
function validateKingMove(square, target) {
  // check if move is legal
}

// Allow king to capture pieces
function kingCapture(square, target) {
  // logic for king capture
}

// Ensure king cannot move into check
function kingSafety(square, target) {
  // logic to prevent illegal moves
}

// Integrate king moves into main game loop
function handleKingMove(square, target) {
  if (validateKingMove(square, target)) {
    // execute move
  }
}

// Detect if king is under attack
function isKingInCheck(color) {
  // logic to detect check
}

// Highlight king square if in check
function highlightCheck(color) {
  // logic to visually mark king
}

// Detect checkmate condition
function isCheckmate(color) {
  // logic to detect checkmate
}

// Display game over message
function gameOver(color) {
  alert(color + " is checkmated! Game Over.");
}

// Integrate check detection into game loop
function handleCheck(color) {
  if (isKingInCheck(color)) {
    highlightCheck(color);
  }
}

// Integrate checkmate detection into game loop
function handleCheckmate(color) {
  if (isCheckmate(color)) {
    gameOver(color);
  }
}

// Prepare castling flags
let whiteCanCastleKingSide = true;
let whiteCanCastleQueenSide = true;
let blackCanCastleKingSide = true;
let blackCanCastleQueenSide = true;

// Check castling conditions
function canCastle(color, side) {
  // logic: king and rook not moved, path clear, not in check
}

// Perform king-side castling
function castleKingSide(color) {
  // move king two squares right, rook beside king
}

// Perform queen-side castling
function castleQueenSide(color) {
  // move king two squares left, rook beside king
}

// Validate castling move
function validateCastling(color, side) {
  return canCastle(color, side);
}

// Integrate castling into game loop
function handleCastling(color, side) {
  if (validateCastling(color, side)) {
    if (side === "king") castleKingSide(color);
    else castleQueenSide(color);
  }
}

// Setup pawn promotion options
const promotionPieces = ["♕","♖","♗","♘"];

// Detect if pawn reached last rank
function isPromotion(square, color) {
  return (color === "white" && square.endsWith("8")) ||
         (color === "black" && square.endsWith("1"));
}

// Prompt user for promotion choice
function choosePromotion() {
  return prompt("Promote pawn to: Queen, Rook, Bishop, Knight?");
}

// Apply promotion piece
function applyPromotion(square, color) {
  const choice = choosePromotion();
  let piece = "♕"; // default queen
  if (choice.toLowerCase() === "rook") piece = "♖";
  else if (choice.toLowerCase() === "bishop") piece = "♗";
  else if (choice.toLowerCase() === "knight") piece = "♘";
  document.getElementById(square).innerText = piece;
}

// Integrate promotion into game loop
function handlePromotion(square, color) {
  if (isPromotion(square, color)) {
    applyPromotion(square, color);
  }
}

// Test promotion
console.log("Pawn promotion feature ready!");


// Setup turn flag
let currentTurn = "white";

// Toggle turn after each move
function toggleTurn() {
  currentTurn = (currentTurn === "white") ? "black" : "white";
}

// Validate if move belongs to current turn
function validateTurn(pieceColor) {
  return pieceColor === currentTurn;
}

// Integrate turn validation into move handler
function handleMove(square, target, pieceColor) {
  if (!validateTurn(pieceColor)) {
    console.log("Not your turn!");
    return;
  }
  // continue move logic
}

// Switch turn after successful move
function completeMove(square, target, pieceColor) {
  // execute move
  toggleTurn();
}

// Display current turn
function showTurn() {
  console.log("Current turn: " + currentTurn);
}

// Check if path is clear for rook, bishop, queen
function isPathClear(square, target) {
  // logic to ensure no piece blocks the path
}

// Prevent moving onto own piece
function isCollision(target, pieceColor) {
  const targetPiece = document.getElementById(target).innerText;
  if (targetPiece && targetPieceColor(targetPiece) === pieceColor) {
    return true;
  }
  return false;
}

// Ensure move does not leave king in check
function kingSafetyAfterMove(square, target, pieceColor) {
  // simulate move, check if king is safe
}

// Integrate path clearance and collision into move handler
function validateMove(square, target, pieceColor) {
  if (!isPathClear(square, target)) return false;
  if (isCollision(target, pieceColor)) return false;
  return true;
}
// Integrate king safety into move handler
function validateFinalMove(square, target, pieceColor) {
  if (!validateMove(square, target, pieceColor)) return false;
  if (!kingSafetyAfterMove(square, target, pieceColor)) return false;
  return true;
}

// Use final validation in game loop
function handleMove(square, target, pieceColor) {
  if (!validateFinalMove(square, target, pieceColor)) {
    console.log("Illegal move!");
    return;
  }
  // execute move
}

// Setup en passant target square
let enPassantTarget = null;

// Detect if pawn moved two squares
function detectDoublePawnMove(start, target, color) {
  if (color === "white" && start.endsWith("2") && target.endsWith("4")) {
    enPassantTarget = target[0] + "3";
  } else if (color === "black" && start.endsWith("7") && target.endsWith("5")) {
    enPassantTarget = target[0] + "6";
  } else {
    enPassantTarget = null;
  }
}
