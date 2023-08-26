
  localStorage.setItem('fname', document.getElementById('first-name').value);
  localStorage.setItem('lname', document.getElementById('last-name').value);
  localStorage.setItem('country', document.getElementById('country').value);
  localStorage.setItem('option', document.getElementById('option').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('radio', document.getElementById('radio').value);
  localStorage.setItem('story', document.getElementById('story').value);


const inputs = form.elements;
const form = document.getElementById('form');

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('invalid', function () {
    form.className = 'submitted';
  });
};

function submitForm() {
  const fname = localStorage.getItem('first-name');
  const lname = localStorage.getItem('last-name');
  const occupation = localStorage.getItem('option');
  const country = localStorage.getItem('country');
  const email = localStorage.getItem('email');
  const yes_no = document.getElementById('radio').value;
  const DescribeExperience = document.getElementById('story').value;
}