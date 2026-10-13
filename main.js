
function playGame(game) {
  const result = document.getElementById("result");

  if (game === "target") {
    const score = Math.floor(Math.random() * 100) + 1;
    result.textContent = "🎯 Your target score: " + score;
  } else if (game === "brain") {
    const answer = prompt("What is 5 + 3?");

    if (answer === null) {
      result.textContent = "Try again when you're ready!";
    } else if (answer.trim() === "8") {
      result.textContent = "🧠 Correct! You are a Brain Master!";
    } else {
      result.textContent = "Not quite! The answer is 8.";
    }
  } else if (game === "dice") {
    const dice = Math.floor(Math.random() * 6) + 1;
    result.textContent = "🎲 You rolled a " + dice + "!";
  }

  result.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
