const animals = ["🐶 강아지", "🐱 고양이", "🐰 토끼", "🐻 곰", "🦊 여우", "🐼 판다", "🦄 유니콘", "🐨 코알라", "🐸 개구리"];
const notiBox = document.getElementById("noti-box");
const button = document.getElementById("bttn");

button.addEventListener("click", () => {
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  notiBox.textContent = randomAnimal + " 등장!";
  notiBox.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`; // 랜덤한 파스텔톤 배경
});
