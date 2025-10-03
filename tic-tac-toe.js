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
