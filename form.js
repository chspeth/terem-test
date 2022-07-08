function handleSubmit(evt) {
  evt.preventDefault();
  const data = new FormData(evt.target);
  const formJSON = Object.fromEntries(data.entries());
  const block = document.querySelector('div');
  block.innerText = JSON.stringify(formJSON, null, 2)
}

const sendData = () => {
  fetch('')
    .then((response) => {
      if (response.ok) {
        alert(response.json());
      }
    })
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);