setInterval(() => {
  const element = document.querySelector(".clock");
  
  const time = new Date();
  element.textContent = time.toLocaleTimeString("en-US");
  
}, 1000);
