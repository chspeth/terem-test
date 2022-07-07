// Поведение первой кнопки
const buttonOne = document.querySelector('.btn-1');
const blockOne = document.querySelector('.div-1');

buttonOne.addEventListener('click', () => {
  if (blockOne.classList.contains('block-open')) {
    blockOne.classList.remove('block-open');
    blockOne.classList.add('block-close');
  } else {
    blockOne.classList.remove('block-close');
    blockOne.classList.add('block-open');
  }
})

//Поведение второй кнопки
const buttonTwo = document.querySelector('.btn-2');
const blockThree = document.querySelector('.div-3');
const blockTwo = document.querySelector('.div-2');

const swapBlock = () => {
  if (blockTwo.classList.contains('left')) {
    blockTwo.style.gridColumnStart = '2';
    blockTwo.style.gridColumnEnd = '3';
    blockThree.style.gridColumnStart = '1';
    blockThree.style.gridColumnEnd = '2';
  } else {
    blockTwo.style.gridColumnStart = '1';
    blockTwo.style.gridColumnEnd = '2';
    blockThree.style.gridColumnStart = '2';
    blockThree.style.gridColumnEnd = '3';
  }
}

buttonTwo.addEventListener('click', () => {
  blockTwo.classList.toggle('left');
  swapBlock();
  }
)

//Модальное окно
document.addEventListener('DOMContentLoaded', () => {
  const messageContainer = document.createElement('div');
  messageContainer.style.width = '300px';
  messageContainer.style.height = '100px';
  messageContainer.style.position = 'fixed';
  messageContainer.style.top = '30px';
  messageContainer.style.left = '40%'
  messageContainer.style.backgroundColor = 'bisque';
  messageContainer.style.padding = '25px';
  messageContainer.style.fontSize = '30px';
  messageContainer.style.textAlign = 'center';
  messageContainer.style.color = 'black';
  messageContainer.textContent = 'Привет, мир';

  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, 5000);
})