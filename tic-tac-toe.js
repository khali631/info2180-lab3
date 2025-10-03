const checkWin = (grid) => {
  const size = 3; // 3x3 grid
  let winner = null;

  // Check all rows
  for (let row = 0; row < size; row++) {
    if (
      grid[row][0] !== "" &&
      grid[row][0] === grid[row][1] &&
      grid[row][1] === grid[row][2]
    ) {
      winner = grid[row][0]; // Returns the winner ("X" or "O")
    }
  }
 // Checks all columns
  for (let col = 0; col < size; col++) {
    if (
      grid[0][col] !== "" &&
      grid[0][col] === grid[1][col] &&
      grid[1][col] === grid[2][col]
    ) {
      winner = grid[0][col]; // Return the winner ("X" or "O")
    }
  }
 // Checks the main diagonal
  if (
    grid[0][0] !== "" &&
    grid[0][0] === grid[1][1] &&
    grid[1][1] === grid[2][2]
  ) {
    winner = grid[0][0]; // Return the winner ("X" or "O")
  }

  // Checks the anti-diagonal
  if (
    grid[0][2] !== "" &&
    grid[0][2] === grid[1][1] &&
    grid[1][1] === grid[2][0]
  ) {
    winner = grid[0][2]; // Return the winner ("X" or "O")
  }

  if (winner !== null) {
    let status = document.getElementById("status");

    status.textContent = `Congratulations! ${winner} is the Winner!`;

    status.classList.add("you-won");
  }
};

const loadFunction = () => {
  const divs = document.querySelectorAll("#board > div");

  let row = 0;
  let col = 0;

  // Add the same class to all divs
  divs.forEach((div) => {
    div.className = "square";

    //for grid placement purposes
    div.setAttribute("data-row", row);
    div.setAttribute("data-col", col);

    // Move to the next column
    col++;

   
    if (col === 3) {
      col = 0;
      row++;
    }
div.addEventListener("mouseover", () => {
      div.classList.add("hover");
    });

    div.addEventListener("mouseleave", () => {
      div.classList.remove("hover");
    });
  });
};
