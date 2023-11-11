//dom selection
//document.getElementById()
const judul = document.getElementById('judul')
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc'
const p = document.getElementsByTagName('p');

for(let i = 0; i < p.length; i++ ){
    p[i].style.backgroundColor = 'lightblue';}
