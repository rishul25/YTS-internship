let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameover = false;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll(".cell");
const status = document.querySelector("#status");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameover || cell.textContent !== "") return;
    const index = cell.getAttribute("id") - 1;
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWin()) {
      status.textContent = `${currentPlayer} wins!`;
      gameover = true;
    } else if (checkTie()) {
      status.textContent = "It's a tie!";
      gameover = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      status.textContent = `${currentPlayer}'s turn`;
    }
  });
});

function checkWin() {
  return winningCombos.some((combo) => {
    return combo.every((index) => {
      return board[index] === currentPlayer;
    });
  });
}

function checkTie() {
  return board.every((cell) => cell !== "");
}
