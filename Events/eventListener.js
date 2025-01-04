const button = document.getElementById("clickButton");

// AddEventListener
// button.addEventListener("click", () => alert("Hi I am being clicked once"));
// button.addEventListener("click", () => console.log("Have a Good Day"));

const onClickHandler = () => alert("Hi I am being clicked once");
const greet = () => console.log("Have a Good Day");

// AddEventListener
//button.addEventListener("click", onClickHandler);
button.addEventListener("click", greet);

//RemoveEventListener
// setTimeout(() => {
//   button.removeEventListener("click", onClickHandler);
//   console.log("Click Event removed after 2seconds");
// }, 2000);

//Note:
//button.removeEventListener("click", () => alert("Hi")); //Does not hold the same reference as onClickHandler

//Event Properties
const eventHandler = (event) => console.log(event);

button.addEventListener("click", eventHandler);
//For Right Click
button.addEventListener("contextmenu", eventHandler);

//For MouseEnter
button.addEventListener("mouseenter", eventHandler);
