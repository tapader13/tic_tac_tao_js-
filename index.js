let audioS1 = new Audio('ting.mp3');
let audioS2 = new Audio('gameover.mp3');
let audioS3 = new Audio('music.mp3');
let turn = 'X';
let count = 0;
let isOver = false;

function getTurn() {
  return turn === 'X' ? '0' : 'X';
}
function checkWin() {
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let box = document.querySelectorAll('#box');
  arr.forEach((e) => {
    if (
      box[e[0]].innerText === box[e[1]].innerText &&
      box[e[1]].innerText === box[e[2]].innerText &&
      box[e[0]].innerText !== ''
    ) {
      // box[e[0]].style.color = 'green';
      // box[e[1]].style.color = 'green';
      // box[e[2]].style.color = 'green';
      //   console.log('minhaj');
      document.getElementById('turn').innerText =
        box[e[0]].innerText + ' is Won';
      document.querySelector('img').style.width = '70%';
      audioS2.play();
      isOver = true;
      if (isOver) {
        document.getElementById('turn').style.color = 'brown';
      }
    }
  });
}

let boxses = document.querySelectorAll('#boxses');
boxses.forEach((b) => {
  let box = b.querySelector('#box');
  b.addEventListener('click', (e) => {
    audioS3.play();
    audioS3.volume = 0.1;
    if (box.innerHTML === '') {
      box.innerHTML = turn;
      audioS1.play();
      turn = getTurn();

      checkWin();
      if (!isOver) {
        document.getElementById('turn').innerText = `Turn On ${turn}`;
      }
    }
  });
});
let btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
  let box = document.querySelectorAll('#box');
  box.forEach((b) => {
    b.innerHTML = '';
  });

  audioS3.pause();
  isOver = false;
  turn = 'X';
  document.getElementById('turn').innerText = `Turn On ${turn}`;
  document.getElementById('turn').style.color = 'black';
  document.querySelector('img').style.width = '0%';
});
