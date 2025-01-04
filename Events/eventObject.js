const button = document.getElementById("clickMe");

const eventHandler = (event) => console.log(event);

button.addEventListener("click", eventHandler);
//For Right Click
button.addEventListener("contextmenu", eventHandler);

//For MouseEnter
button.addEventListener("mouseenter", eventHandler);
