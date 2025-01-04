function placeOrder() {
  const orderPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Placed");
      resolve();
    }, 1000);
  });
  return orderPromise;
}

function processPayment() {
  const paymentPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment Processed");
      resolve();
    }, 1000);
  });
  return paymentPromise;
}

function displayOrderDetails() {
  const orderDetailsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Details Displayed");
      resolve();
    }, 1000);
  });
  return orderDetailsPromise;
}

function updateOrderHistory(callback) {
  const orderHistoryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order History Updated");
      resolve();
    }, 1000);
  });
  return orderHistoryPromise;
}

async function executeOrder() {
  try {
    await placeOrder();
    await processPayment();
    await displayOrderDetails();
    await updateOrderHistory();
    console.log("All Steps Completed");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Execute the async function
executeOrder();