function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    let sound;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        sound = new Audio('win.mp3'); // Aapko yeh file add karni hogi
    } else {
        result = "Computer wins!";
        sound = new Audio('lose.mp3'); // Aapko yeh file add karni hogi
    }

    if (sound) {
        sound.play();
    }

    document.getElementById('result').innerHTML = `
        You chose: <img src="${playerChoice}.png" alt="${playerChoice}" width="50"> <br>
        Computer chose: <img src="${computerChoice}.png" alt="${computerChoice}" width="50"> <br>
        Result: ${result}
    `;
}
