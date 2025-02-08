const bttn = document.querySelector(".joy");     // 버튼 요소 가져옴

function display() {
  const fruits=['apple','orange','banana'];
  console.log(...fruits);
  const players = [
    { name: "이강인", team: "파리 생제르맹", position: "MF" },
    { name: "조규성", team: "미트윌란", position: "FW" }
];

const newPlayer = { name: "황희찬", team: "울버햄튼 원더러스", position: "FW" };

const updatedPlayers = [...players, newPlayer];

console.log(updatedPlayers);
/*
[
  { name: '이강인', team: '파리 생제르맹', position: 'MF' },
  { name: '조규성', team: '미트윌란', position: 'FW' },
  { name: '황희찬', team: '울버햄튼 원더러스', position: 'FW' }
]
*/

}

bttn.addEventListener("click", display);          // 버튼 클릭하면 display 함수 실행