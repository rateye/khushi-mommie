const hateItems = [
  "We hate that you’re too perfect for this world 🫠",
  "We hate how your smile makes everything better 😤",
  "We hate your stupidly good hair days 💇‍♀️✨",
  "We hate that you can make bhindi taste good 🤨",
  "We hate how your poha has become the gold standard 💛",
  "We hate your flawless fashion sense — like stop already 👗😤",
  "We hate that you’re always right (it’s annoying) 😒",
  "We hate how your hugs solve existential crises 🤧",
  "We hate your voice — it’s way too comforting 🎭🩷",
  "We hate that we could only think of 9 things because you’re actually the best 🥲"
];

const hateList = document.getElementById("hate-list");

hateItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  hateList.appendChild(li);
});
