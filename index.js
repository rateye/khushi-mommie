function buttonClick(link, event) {
  createHeart(event.clientX, event.clientY);
  setTimeout(() => {
    window.location.href = link;
  }, 1000); // slight delay for animation
}

function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.className = 'heart';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
}

// Heart animation styling
const style = document.createElement('style');
style.textContent = `
  .heart {
    position: fixed;
    font-size: 24px;
    animation: floatUp 1s ease-out forwards;
    pointer-events: none;
    z-index: 1000;
  }

  @keyframes floatUp {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-100px); }
  }
`;
document.head.appendChild(style);
