const changedColor = document.querySelector('#title');
changedColor.style.color = 'purple';

const colors = ['yellow', 'green', 'blue'];
let index = 0;

const interval = setInterval(() => {
   changedColor.style.color = colors[index];
   index = (index + 1) % colors.length;
}, 1000);

setTimeout(() => {
   clearInterval(interval);
}, 10000);