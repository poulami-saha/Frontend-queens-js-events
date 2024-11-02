const button = document.getElementById("clickButton");

const onClickHandler = () => alert("Hi I am being clicked once");
//const greet = () => console.log("Enjoy the Saturday!!!");

// Event Property Usage
button.onclick = onClickHandler;
//button.onclick = greet;
