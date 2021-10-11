document.getElementById('get-jokes').addEventListener('click', getJokes);

//get jokes
function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const res = JSON.parse(this.responseText);
      
      let output = '';
      if (res.type === 'success') {
        res.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      }
      else {
        output+='<h3>Ooops! The internet broke</h3>'
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();


  e.preventDefault();
}