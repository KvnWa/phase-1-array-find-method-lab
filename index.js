// superbowlWin = (record) => {
//     const result = record.find( record => record.result === "W" );
//     return !!result ? result.year : undefined;
//   }

  // find will return the first item in the array that matches the passed through argument
  
  
  
  function superbowlWin(teamYears) {
    
    const winningRecord = teamYears.find(elementOne => elementOne.result === "W");
    return winningRecord ? winningRecord.year : undefined
  }
  console.log(superbowlWin(records));
  