let name
if (localStorage.getItem('my-name')) {
	name = localStorage.getItem('my-name')
} else{
	name = prompt('Как вас зовут?')
	localStorage.setItem('my-name', name)
};
document.querySelector('h3').textContent = 'Привет, ' + name

document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString()
setInterval(function() {
	document.querySelector('h1').textContent = 'Сейчас ' + new Date().toLocaleTimeString()
}, 1000);

const colors = ['Aqua', 'Aquamarine', 'BlanchedAlmond', 'BlueViolet', 'CornflowerBlue', 'Coral', 'DarkSalmon', 'DeepSkyBlue', 'Gold', 'Grey']
let index = 0
document.querySelector('button').onclick = function(){
	document.body.style.background = colors[index]
	index++
	if(index >= colors.length) index = 0
};