// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date();
  let  hour = today.getHours();
  let  min = today.getMinutes();
  let  sec = today.getSeconds();  
  const amPm = hour >= 12 ? 'PM' : 'AM'; // Set AM or PM  
  hour = hour % 12 || 12; // 12hr Format  
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}  
    ${showAmPm ? amPm : ''}`; // Output Time
  setTimeout(showTime, 1000);
};

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {   
    document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {    
    document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {  
    document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
};

function getNameFocus() {
  if (localStorage.getItem('name') === null){
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  } if (localStorage.getItem ('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  } 
};

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem(e.target.id, e.target.innerText);
      if (e.target.id === name) {
        name.blur();
      } else {
        focus.blur();
      }
    }
  } else {
    localStorage.setItem(e.target.id, e.target.innerText);
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