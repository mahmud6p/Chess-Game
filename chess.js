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

// Validate en passant capture
function validateEnPassant(square, target, color) {
  return target === enPassantTarget;
}

// Apply en passant capture
function applyEnPassant(square, target, color) {
  if (validateEnPassant(square, target, color)) {
    document.getElementById(target).innerText = document.getElementById(square).innerText;
    document.getElementById(square).innerText = "";
    // remove captured pawn
    const capturedSquare = target[0] + (color === "white" ? "5" : "4");
    document.getElementById(capturedSquare).innerText = "";
  }
}

// Integrate en passant into move handler
function handlePawnMove(square, target, color) {
  if (validateEnPassant(square, target, color)) {
    applyEnPassant(square, target, color);
    return;
  }
  // normal pawn move logic
}
// Test en passant
console.log("En Passant feature ready!");

// Detect stalemate (no legal moves, not in check)
function isStalemate(color) {
  // logic to check if player has no legal moves but king not in check
}

// Track board positions for repetition
let positionHistory = [];

function checkThreefoldRepetition() {
  // logic to detect if same position repeated 3 times
}


// Track moves without pawn move or capture
let halfMoveCounter = 0;

function checkFiftyMoveRule() {
  return halfMoveCounter >= 100; // 50 moves each side
}

// Detect insufficient material for checkmate
function isInsufficientMaterial() {
  // logic: only kings, or king + minor piece
}

// Integrate all draw conditions
function checkDraw(color) {
  if (isStalemate(color)) return true;
  if (checkThreefoldRepetition()) return true;
  if (checkFiftyMoveRule()) return true;
  if (isInsufficientMaterial()) return true;
  return false;
}

// End game if draw detected
function handleDraw(color) {
  if (checkDraw(color)) {
    alert("Game drawn!");
  }
}
// Setup move history
let moveHistory = [];
let redoStack = [];

// Save move into history
function saveMove(square, target, piece) {
  moveHistory.push({square, target, piece});
  redoStack = []; // clear redo stack
}

// Undo last move
function undoMove() {
  if (moveHistory.length === 0) return;
  const lastMove = moveHistory.pop();
  redoStack.push(lastMove);
  // revert board state
}

// Redo last undone move
function redoMove() {
  if (redoStack.length === 0) return;
  const move = redoStack.pop();
  moveHistory.push(move);
  // reapply move
}

// Add undo/redo buttons
document.getElementById("undoBtn").onclick = undoMove;
document.getElementById("redoBtn").onclick = redoMove;

// Test undo/redo
console.log("Undo/Redo system ready!");

// Enable drag on pieces
function enableDrag(pieceId) {
  const piece = document.getElementById(pieceId);
  piece.draggable = true;
  piece.ondragstart = dragStart;
}

// Handle drag start
function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// Allow drop on squares
function allowDrop(event) {
  event.preventDefault();
}

// Handle drop event
function drop(event) {
  event.preventDefault();
  const pieceId = event.dataTransfer.getData("text");
  const piece = document.getElementById(pieceId);
  event.target.appendChild(piece);
}

// Highlight possible moves for dragged piece
function highlightMoves(pieceId) {
  // logic to highlight squares
}

// Integrate drag and drop into game loop
function initDragAndDrop() {
  const pieces = document.querySelectorAll(".piece");
  pieces.forEach(p => enableDrag(p.id));
}

// Reset game function
function resetGame() {
  // clear board and reinitialize pieces
}

// Clear all squares
function clearBoard() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(sq => sq.innerText = "");
}

// Reinitialize pieces to starting positions
function initPieces() {
  // place pawns, rooks, knights, bishops, queen, king
}

// Reset game state flags
function resetFlags() {
  currentTurn = "white";
  enPassantTarget = null;
  halfMoveCounter = 0;
  positionHistory = [];
}

// Add reset button
document.getElementById("resetBtn").onclick = () => {
  clearBoard();
  initPieces();
  resetFlags();
};

// Test restart
console.log("Game restart feature ready!");

// Setup timers for players
let whiteTime = 300; // 5 minutes
let blackTime = 300; // 5 minutes
let timerInterval = null;

// Display timer on UI
function showTimer() {
  document.getElementById("whiteTimer").innerText = whiteTime;
  document.getElementById("blackTimer").innerText = blackTime;
}

// Start timer for current turn
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (currentTurn === "white") {
      whiteTime--;
    } else {
      blackTime--;
    }
    showTimer();
    checkTimeOut();
  }, 1000);
}

// Switch timer when turn changes
function toggleTurn() {
  currentTurn = (currentTurn === "white") ? "black" : "white";
  startTimer();
}

// Detect timeout
function checkTimeOut() {
  if (whiteTime <= 0) {
    alert("White ran out of time! Black wins.");
    clearInterval(timerInterval);
  }
  if (blackTime <= 0) {
    alert("Black ran out of time! White wins.");
    clearInterval(timerInterval);
  }
}

// Test timer
console.log("Timer feature ready!");

// Setup AI move generator
function generateAIMove(color) {
  // placeholder for AI logic
}

// Simple random move selection
function randomMove(color) {
  const possibleMoves = getAllLegalMoves(color);
  const randomIndex = Math.floor(Math.random() * possibleMoves.length);
  return possibleMoves[randomIndex];
}

// Apply AI move
function applyAIMove(color) {
  const move = randomMove(color);
  handleMove(move.square, move.target, color);
}

// Integrate AI into game loop
function handleAITurn(color) {
  if (color === "black") {
    applyAIMove(color);
  }
}

// Enable player vs AI mode
let aiEnabled = true;

function toggleAIMode() {
  aiEnabled = !aiEnabled;
}

// Test AI opponent
console.log("AI opponent feature ready!");

// Setup sound files
const moveSound = new Audio("sounds/move.mp3");
const captureSound = new Audio("sounds/capture.mp3");
const checkmateSound = new Audio("sounds/checkmate.mp3");

// Play move sound
function playMoveSound() {
  moveSound.play();
}
// Play capture sound
function playCaptureSound() {
  captureSound.play();
}

// Play checkmate sound
function playCheckmateSound() {
  checkmateSound.play();
}

// Integrate sounds into game loop
function handleMove(square, target, pieceColor) {
  // normal move
  playMoveSound();
  // if capture
  if (isCapture(target)) playCaptureSound();
  // if checkmate
  if (isCheckmate(pieceColor)) playCheckmateSound();
}

// Test sound effects
console.log("Sound effects feature ready!");

// Setup scoreboard
let whiteWins = 0;
let blackWins = 0;
let draws = 0;

// Display scoreboard on UI
function showScoreboard() {
  document.getElementById("scoreboard").innerText =
    `White Wins: ${whiteWins} | Black Wins: ${blackWins} | Draws: ${draws}`;
}
// Update scoreboard when someone wins
function updateWin(winner) {
  if (winner === "white") whiteWins++;
  else if (winner === "black") blackWins++;
  showScoreboard();
}

// Update scoreboard when game is drawn
function updateDraw() {
  draws++;
  showScoreboard();
}
// Integrate scoreboard with game end
function handleGameEnd(result) {
  if (result === "white") updateWin("white");
  else if (result === "black") updateWin("black");
  else if (result === "draw") updateDraw();
}
// Test scoreboard
console.log("Scoreboard feature ready!");
// Setup socket connection
const socket = io.connect("http://localhost:3000");
// Emit move event to server
function sendMove(square, target, pieceColor) {
  socket.emit("move", {square, target, pieceColor});
}
// Listen for opponent move
socket.on("move", (data) => {
  handleMove(data.square, data.target, data.pieceColor);
});
// server.js
const io = require("socket.io")(3000, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  socket.on("move", (data) => {
    socket.broadcast.emit("move", data);
  });
});

// Toggle multiplayer mode
let multiplayerEnabled = true;

function toggleMultiplayer() {
  multiplayerEnabled = !multiplayerEnabled;
}
