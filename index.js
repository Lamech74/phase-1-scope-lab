// Declare a variable in global scope called customerName using the var keyword.
var customerName;

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
    console.log(customerName);
  } else {
    console.log("customerName is not defined");
  }
}

// Write a function that, when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob';
  console.log(bestCustomer);
}

// See the consequences of declaring a variable in global scope by writing a new function that changes the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = 'still not bob';
  console.log(bestCustomer);
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'John Doe';

// Write a function that attempts to change the constant and observe what JavaScript does.
function changeLeastFavoriteCustomer() {
  // This will result in an error, as you cannot reassign a value to a constant.
  leastFavoriteCustomer = 'Jane Doe';
}

// Example usage
customerName = 'john';
upperCaseCustomerName(); // Output: JOHN

setBestCustomer(); // Output: not bob
overwriteBestCustomer(); // Output: still not bob

console.log(leastFavoriteCustomer); // Output: John Doe
changeLeastFavoriteCustomer(); // This will throw an error.
