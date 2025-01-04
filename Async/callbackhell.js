function placeOrder(callback) {
  setTimeout(() => {
    console.log("Order Placed");
    callback();
  }, 1000);
}

function processPayment(callback) {
  setTimeout(() => {
    console.log("Payment Processed");
    callback();
  }, 1000);
}

function displayOrderDetails(callback) {
  setTimeout(() => {
    console.log("Order Details Displayed");
    callback();
  }, 1000);
}

function updateOrderHistory(callback) {
  setTimeout(() => {
    console.log("Order History Updated");
    callback();
  }, 1000);
}

// Demonstrating Callback Hell
placeOrder(() => {
  processPayment(() => {
    displayOrderDetails(() => {
      updateOrderHistory(() => {
        console.log("All Steps Completed");
      });
    });
  });
});
