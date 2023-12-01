function correctColor(color) {
    return color === 'blue' || color === 'red' || color === 'yellow' || color === 'green';
}
console.log(correctColor('red'))

function correctCombination(proposal) {
  for (let color of proposal) {
    if (!correctColor(color)) {
      return false; // If any color is not correct, return false
    }
  }
  return true; // If all colors are correct, return true
}
console.log(correctCombination(['blue','red','purple']))

function isCorrectCombination(proposal, targetCombination) {
  // Ensure both arrays have the same length
  if (proposal.length !== targetCombination.length) {
    return false;
  }

  // Check each position in the arrays
  for (let i = 0; i < proposal.length; i++) {
    if (proposal[i] !== targetCombination[i]) {
      return false; // If any position does not match, return false
    }
  }

  return true; // If all positions match, return true
}
function playGame(targetCombination) {
  let attempts = 12;

  while (attempts > 0) {
    // Get the player's proposal (you can implement this based on user input)
    let playerProposal = prompt('Enter your proposal:').split(',');

    // Check if the proposal is valid
    if (!correctCombination(playerProposal)) {
      console.log('Invalid proposal. Please use only blue, red, yellow, or green.');
      continue; // Skip the rest of the loop and ask for a new proposal
    }

    // Check if the proposal is correct
    if (isCorrectCombination(playerProposal, targetCombination)) {
      console.log('Congratulations! You found the correct combination!');
      return; // Exit the function, game won
    } else {
      console.log('Incorrect combination. Try again.');
    }

    attempts--;

    if (attempts === 0) {
      console.log('Sorry, you have run out of attempts. The correct combination was:', targetCombination);
    } else {
      console.log('Remaining attempts:', attempts);
    }
  }
}

const targetCombination = ['blue', 'red', 'green', 'yellow']; // Set your target combination

playGame(targetCombination);
console.log(playGame(targetCombination('blue', 'red', 'green', 'yellow')))
