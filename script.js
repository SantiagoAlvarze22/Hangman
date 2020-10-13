const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again')
const popup = document.getElementById('popup-container')
const notificaton = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.getElementById('.figure-part')

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)]

const correctLetters = [];
const wrongLetters = [];

//show hidden word

function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(letter => `
        <span class="letter">
          ${correctLetters.includes(letter) ? letter : ''} 
        </span>
      `).join('')}
  `;
  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerHTML = 'Congratulations! You won! :) '
    popup.style.display = 'flex'
  }
}

//update wrong letters
function updateWrongLettersEl() {
  console.log(updateWrongLettersEl)
}

//show notification 
function showNotification() {
  notificaton.classList.add('show')

  setTimeout(() => {
    notificaton.classList.remove('show');
  }, 2000)
}

//keydown letter press
window.addEventListener('keydown', e => {
  //console.log(e.keyCode)
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      correctLetters.push(letter);
      displayWord()
    } else {
      showNotification();
    }
  } else {
    if (!wrongLetters.includes(letter)) {
      wrongLetters.push(letter)
      updateWrongLettersEl()
    } else {
      showNotification()
    }
  }
})

displayWord();

console.log(selectedWord) 