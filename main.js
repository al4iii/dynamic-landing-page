// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const showAmPm = true;

// Show Time
function showTime() {
  const today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();  
  const timeFormat = hour >= 12 ? 'PM' : 'AM'; // Set AM or PM  
  hour = hour % 12 || 12; // 12hr Format  
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? timeFormat : ''}`; // Output Time
  setTimeout(showTime, 1000);
};

// Add Zeros
let addZero = (n) => (parseInt(n, 10) < 10 ? '0' : '') + n;

// Set Background and Greeting
let setBgGreet = () => {
  let today = new Date();
  let hour = today.getHours();
   if (hour < 12) {   
    document.body.style.backgroundImage = `url('https://i.ibb.co/7vDLJFb/morning.jpg')`;
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {    
    document.body.style.backgroundImage = `url('https://i.ibb.co/3mThcXc/afternoon.jpg')`;
    greeting.textContent = 'Good Afternoon, ';
  } else {  
    document.body.style.backgroundImage = `url('https://i.ibb.co/924T2Wv/night.jpg')`;
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
};

let getNameFocus = () => { 
  name.textContent = localStorage.getItem('name') ? localStorage.getItem('name') :'[Enter Name]';
  focus.textContent = localStorage.getItem ('focus') ? localStorage.getItem ('focus') : '[Enter Focus]'; 
};

// Set Name
let setName = (e) => {
  localStorage.setItem(e.target.id, e.target.innerText);
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.id === name) {
        name.blur();
      } else {
        focus.blur();
      }
    }
  }
};

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setName);
focus.addEventListener('blur', setName);

// Run
showTime();
setBgGreet();
getNameFocus();