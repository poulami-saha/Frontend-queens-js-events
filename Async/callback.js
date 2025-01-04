function placeOrder(callback) {
  setTimeout(() => {
    console.log("Order Placed");
    callback();
  }, 1000);
}

placeOrder(() => console.log("Proceeding to Payment"));
