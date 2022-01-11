const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(array) {
    const winningGame = array.find(game => game.result === "W");
    return winningGame.year;

}

function superbowlWin(array) {
    for (const index of array) {
        if (index.result === "W") {
            return index.year
        }
    }
}
