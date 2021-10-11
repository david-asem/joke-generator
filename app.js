document.getElementById('get-jokes').addEventListener('click', getJokes);

//get jokes
function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const res = JSON.parse(this.responseText);
      console.log(res);
    }
  }

  xhr.send();


  e.preventDefault();
}