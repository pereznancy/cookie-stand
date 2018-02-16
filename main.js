var store = {};
store.name = "Pioneer Square";
store.minCustomer = "17";
store.maxCustomer = "88";
store.avgCookies = "5.2";
store.showInfo = function() {
  var message = "STORE";
  message += "\n" + store.name;
  message += "\n" + store.minCustomer;
  message += "\n" + store.maxCustomer;
  message += "\n" + store.avgCookies;
  alert(message);
}

var store = [];
store.push({name:"Pioneer Square", minCustomer:"17", maxCustomer: "88", avgCookies: "5.2"});
store.push({name:"Portland Airport", minCustomer:"6", maxCustomer: "24", avgCookies: "1.2"});
store.push({name:"Washington Square", minCustomer:"11", maxCustomer: "38", avgCookies: "1.9"});
store.push({name:"Pearl District", minCustomer:"3", maxCustomer: "24", avgCookies: "2.6"});

function addStore() {
  var name = prompt("Store Name:");
  var minCustomer = prompt("Min hourly customers:");
  var maxCustomer = prompt("Max hourly customers:");
  var avgCookies = prompt("Average cookies sold per customer:");
  store.push({name: name, minCustomer: minCustomer, maxCustomer: maxCustomer, avgCookies: avgCookies});
}





//
//
// //stored object properties
// var pioneer = {
//   name: "Pioneer Square";
//   minCustomer: "17";
//   maxCustomer: "88";
//   avgCookies: "5.2";
// }
//
// var pdxAir = {
//   name: "Portland Airport";
//   minCustomer: "6";
//   maxCustomer: "24";
//   avgCookies: "1.2";
// }
//
// var washington = {
//   name: "Washington Square";
//   minCustomer: "11";
//   maxCustomer: "38";
//   avgCookies: "1.9";
// }
//
// var pioneer = {
//   name: "Pearl District";
//   minCustomer: "3";
//   maxCustomer: "24";
//   avgCookies: "2.6";
// }


function getRandomArbitrary(min, max) {
  return Math.Random() * (max - min) + min;
}
