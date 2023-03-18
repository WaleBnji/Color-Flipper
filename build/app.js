//Selecting Elements
const colors = ['red', 'blue', '#f1f5f8', 'purple'];
const btn = document.getElementById('btn');
const color = document.getElementById('indicator');

//Add an event listener to the button
btn.addEventListener('click', function () {
  const randomNumber = getRandomNum();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
