const data = {
  name: "aditya",
  id: 33,
};

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((errormsg) => console.log(errormsg));

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((errorMessage) => console.log(errorMessage));
