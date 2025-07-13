const loveThings = [
  "I love your entire soul. 🦋",
  "I love your hair. 🌸",
  "I love your butt. 🐰",
  "I love your boobs which you have flashed me twice and not in a creepy way. ✨",
  "I love the way you make poha, the best poha in the world. 💕",
  "I love the way you cook bhindi. 💫",
  "I love how small phulkas you make. 💖",
  "I love your pink mokobora bag the way you carry it. 🐰",
  "I love your grey elephant. 🐸",
  "I love you in ur blue blazer. 🦋",
  "I love you in your sprite shorts. 💕",
  "I love you in lizard pants. 💖",
  "I love your Zudio purple chaddy with hearts drying in the window. 🐰",
  "I love your attitude. ✨",
  "I love the way you sleep while curling your toes. 🌷",
  "I love your smile you wearing it always. 🐸",
  "I love your teeth. 🩷",
  "I love your habit of plucking your hair all day with that spring of yours. 🎀",
  "I love your fashion. 💖",
  "I love your mommy habits. 🐰",
  "I love the way you say 'um'. 💫",
  "I love the way you use the nazar emoji everywhere. 🌸",
  "I love your love for theater. ✨",
  "I love your acting. 💕",
  "I love how you walk into a room like you own it. 🦋",
  "I love the fire in your eyes when you talk about your dreams. 💖",
  "I love the way you fight for people you care about. 🐸",
  "I love how deeply you feel things. 💕",
  "I love your handwriting. 🎀",
  "I love your eye rolls. 💖",
  "I love your voice when you narrate a story. 💫",
  "I love your dramatic exits. 💕",
  "I love the way you hug. 💖",
  "I love how you can sleep anywhere yoga mats. 🐰",
  "I love how obsessed you are with details. 🐸",
  "I love your random dance breaks. 💖",
  "I love your playlists. ✨",
  "I love how you send 20 photos to pick one. 💫",
  "I love your obsession with sink ka bartan. 🌸",
  "I love your obsession with good pajamas. 🐰",
  "I love how you dont remember tiny things. 💕",
  "I love your eye for beauty. 🦋",
  "I love how protective you are. 💖",
  "I love the way you handle chaos with flair. 🎀",
  "I love how your mind never stops thinking. 💫",
  "I love how you cry in films. 💕",
  "I love how you scream when excited. 🐰",
  "I love the way you sing while cooking. 🩷",
  "I love your proud chin tilt. ✨",
  "I love how you perform even while telling a normal story. 💖",
  "I love how you turn anger into a one-woman show. 🐸",
  "I love your dramatic silences. 💫",
  "I love your confidence in eyeliner. 🦋",
  "I love your obsession with diary n diary ka buisness. 💕",
  "I love your energy in the morning. 🎀",
  "I love your sleepy 'hmm' at night. 🐰",
  "I love your obsession with bra straps. 🐸",
  "I love you in that corporate look. 💖",
  "I love your doodles in my ipad. ✨",
  "I love your great selfies. 🌸",
  "I love your favorite corner of the bed. 🐰",
  "I love your deep thoughts out of nowhere. 💕",
  "I love your love for breakfast. 🩷",
  "I love your theatre monologues in the mirror. 💖",
  "I love the way you take up space. 🦋",
  "I love the way you sit cross-legged. 🎀",
  "I love your head tilts when you're confused. 💫",
  "I love your annoyed sighs. 💕",
  "I love your one-line burns. 🐸",
  "I love how you bounce when you laugh. ✨",
  "I love your sleepy face. 💖",
  "I love how you pretend to be angry. 🐰",
  "I love how you make every small thing an event. 💫",
  "I love your kindness when no one sees it. 💕",
  "I love how you take control when needed. 🩷",
  "I love your fire and softness together. 🌸",
  "I love your messy hair. 🐰",
  "I love your sharp brain and your soft heart. 💖",
  "I love your accents. 🦋",
  "I love your 'I don’t care' attitude (even when you care). 💕",
  "I love how you handle serious moments. 🎀",
  "I love your background commentary during life. ✨",
  "I love how you romanticize everything. 💫",
  "I love your habit of mispronouncing. 💖",
  "I love your taste in jewelry. 🩷",
  "I love your honesty even when it hurts. 🐸",
  "I love your art of storytelling. 🌸",
  "I love the way you fall asleep. 🐰",
  "I love how you support others like a rock. 💖",
  "I love the sparkle in your angry eyes. 💫",
  "I love your soft hands. 💕",
  "I love your strength during storms. 💖",
  "I love your face when you're focused. 🩷",
  "I love your bathroom concerts. 🐰",
  "I love the way you care for everyon3e. 🎀",
  "I love your freakouts . ✨",
  "I love how you defend your beliefs. 💖",
  "I love your creative chaos. 🐸",
  "I love your happy twirls. 🐰",
  "I love your way of saying “what the hell”. 💫",
  "I love your rituals. 💕",
  "I love your scent. 🦋",
  "I love how you notice unnoticed things. 💖",
  "I love the way you fix my mood without knowing. 🌸",
  "I love your courage. 💫",
  "I love the way you believe in magic. 💕",
  "I love that you're Khushi. 💖",
  "I can keep on writing till I go beyond infinity but I need to make u proud too, so I’ll just love bomb u my entire existence."
];

const list = document.getElementById("love-list");

loveThings.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.addEventListener('click', e => showHeart(e.clientX, e.clientY));
  list.appendChild(li);
});

// Heart popup on scroll too
window.addEventListener('scroll', () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  showHeart(x, y);
});

function showHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '💖';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
}
