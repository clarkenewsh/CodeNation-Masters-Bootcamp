// Basic set time out function - calls the sayHello function after 2 seconds 
function sayHello() {
    alert('Hello!!');
  }
  
  setTimeout(sayHello, 2000);

  // Can also more arguments i.e functions calls 

  // Arrow function

  let timer = setTimeout(() => alert('Hello'), 1000);
