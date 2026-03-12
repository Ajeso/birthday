// Generate floating petals and coins
const layer = document.getElementById("floatLayer");
const items = ["🌸", "🌺", "🌼", "🌹", "🌷", "💛", "💰", "✨", "💫", "🌻"];

for (let i = 0; i < 28; i++) {
  const el = document.createElement("span");
  const item = items[Math.floor(Math.random() * items.length)];
  el.textContent = item;
  el.className = ["💰", "💛", "✨", "💫"].includes(item) ? "coin" : "petal";
  el.style.left = Math.random() * 100 + "vw";
  el.style.top = "-50px";
  el.style.animationDuration = 8 + Math.random() * 14 + "s";
  el.style.animationDelay = Math.random() * 16 + "s";
  el.style.fontSize = 0.9 + Math.random() * 1.2 + "rem";
  layer.appendChild(el);
}
