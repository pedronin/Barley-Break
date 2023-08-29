const desk = document.querySelector('.barleybreak__desk');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];

function random() {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * arr.length);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
random();

function render() {
  arr.forEach((item) => {
    desk.innerHTML += `<div class="barleybreak__cell">${item}</div>`;
  });
}
render();

function check(cell) {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === +cell[i].textContent) {
      count++;
    }
  }
  if (count === 15) {
    // alert('игра окончена')
    cell.forEach((item) => {
      item.classList.add('end');
      setTimeout(() => {
        cell.forEach((item) => {
          item.classList.remove('end');
        });
      }, 1500);
    });
  }
}

desk.addEventListener('click', move);

function move(e) {
  if (e.target.classList.contains('barleybreak__cell')) {
    // сначала мы переводим все элементы в масив затем находим индекс того элемента на который кликнули
    const cell = Array.from(document.getElementsByClassName('barleybreak__cell'));
    const i = cell.indexOf(e.target);
    if (e.target.textContent !== '') {
      if (cell[i + 1] && cell[i + 1].innerHTML === '') {
        cell[i + 1].innerHTML = cell[i].innerHTML;
        cell[i].innerHTML = '';
      } else if (cell[i - 1] && cell[i - 1].innerHTML === '') {
        cell[i - 1].innerHTML = cell[i].innerHTML;
        cell[i].innerHTML = '';
      } else if (cell[i + 4] && cell[i + 4].innerHTML === '') {
        cell[i + 4].innerHTML = cell[i].innerHTML;
        cell[i].innerHTML = '';
      } else if (cell[i - 4] && cell[i - 4].innerHTML === '') {
        cell[i - 4].innerHTML = cell[i].innerHTML;
        cell[i].innerHTML = '';
      }

      check(Array.from(document.getElementsByClassName('barleybreak__cell')));
    }
  }
}

function end() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
  desk.innerHTML = '';
  num.forEach((item) => {
    desk.innerHTML += `<div class="barleybreak__cell">${item}</div>`;
  });
  check(Array.from(document.getElementsByClassName('barleybreak__cell')));
}

document.querySelector('.barleybreak__btn-mix').addEventListener('click', () => {
  desk.innerHTML = '';
  random();
  render();
});
