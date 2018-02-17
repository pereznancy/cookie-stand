var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]; //hours for all stores



//function to get a random number between min and max customers depending on store
var newRandom = function getRandomIntInclusive(min, max) { //thank you MDN
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //"The maximum is inclusive and the minimum is inclusive" -MDN
}

var newCookies = function () {
  return (this.newCustomer * this.avgCookies);

}

//object properties
var pioneer = {
name: "Pioneer Square",
minCustomer: "17",
maxCustomer: "88",
avgCookies: "5.2",
newCustomer: function (){  //function within a function, fancy.
  newRandom(this.minCustomer, this.maxCustomer); //still not totally comfortable with this..pun intented
},
newAvgCookies: function(){
  newCookies();
}
};


var airport = {
name: "Portland Airport",
minCustomer: "6",
maxCustoer: "88",
avgCookies: "5.2",
newCustomer: function (){
  newRandom(this.minCustomer, this.maxCustomer);
  console.log(this.newCustomer);
}
};

var washington = {
name: "Washington Square",
minCustomer: "11",
maxCustoer: "38",
avgCookies: "1.9",
newCustomer: function (){
  newRandom(this.minCustomer, this.maxCustomer);
  console.log(this.newCustomer);
}
};

var pearl = {
name: "Pearl District",
minCustomer: "3",
maxCustoer: "24",
avgCookies: "2.6",
newCustomer: function (){
  newRandom(this.minCustomer, this.maxCustomer);
  console.log(this.newCustomer);
}
};


var store = [];
store.push({name:"Pioneer Square", minCustomer:"17", maxCustomer: "88", avgCookies: "5.2"});
store.push({name:"Portland Airport", minCustomer:"6", maxCustomer: "24", avgCookies: "1.2"});
store.push({name:"Washington Square", minCustomer:"11", maxCustomer: "38", avgCookies: "1.9"});
store.push({name:"Pearl District", minCustomer:"3", maxCustomer: "24", avgCookies: "2.6"});



function makeTable() {
  var storeHTML = "<tr><th>Store</th><th>Min Customer</th><th>Max Customer</th><th>Cookies per Cust</th></tr>";
  for (var i = 0; i < store.length; i++) {
    var currentStore = store[i];
    storeHTML += "<tr><td>"+currentStore.name+"</td><td>"+currentStore.minCustomer+"</td><td>"+currentStore.maxCustomer+"</td><td>"+currentStore.avgCookies+"</td></tr>";
  }
  document.getElementById("store").innerHTML = storeHTML;
}

makeTable();



//
// Math.floor(Math.random()*100);
//
//
//
//

//
// function addStore() {
//   var name = prompt("Store Name:");
//   var minCustomer = prompt("Min hourly customers:");
//   var maxCustomer = prompt("Max hourly customers:");
//   var avgCookies = prompt("Average cookies sold per customer:");
//   store.push({name: name, minCustomer: minCustomer, maxCustomer: maxCustomer, avgCookies: avgCookies});
// }

// for (var i = 0; i < store.length; i++)
