const luckyEmojis = ["🧿", "🍀", "💖", "🪄", "🐸", "🌸", "🦄", "🌈", "✨"];

function addManifestation() {
  const input = document.getElementById("manifest-input");
  const text = input.value.trim();

  if (text === "") return;

  const list = document.getElementById("manifest-list");
  const li = document.createElement("li");

  // Add a random lucky emoji
  const emoji = luckyEmojis[Math.floor(Math.random() * luckyEmojis.length)];
  li.textContent = `${text} ${emoji}`;
  list.appendChild(li);

  input.value = "";

  showEmojiBurst();
}

function showEmojiBurst() {
  const burst = document.getElementById("emoji-burst");

  for (let i = 0; i < 7; i++) {
    const span = document.createElement("span");
    span.classList.add("emoji");
    span.textContent = luckyEmojis[Math.floor(Math.random() * luckyEmojis.length)];

    // Randomize position
    span.style.left = `${Math.random() * 100}%`;
    span.style.top = `${Math.random() * 20 + 40}%`;

    burst.appendChild(span);

    // Remove after animation
    setTimeout(() => {
      burst.removeChild(span);
    }, 1000);
  }
}
