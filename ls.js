const container = document.querySelector('#container');
const item = container.innerHTML + ', spoon'
console.log(item);

window.localStorage.setItem('item', item);

const newItems = window.localStorage.getItem('item');

container.innerHTML = newItems

