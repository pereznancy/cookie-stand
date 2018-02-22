var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"] //hours for all stores


//function will get cookies ordered based on random customer # & avg cookies bought
var getCookiesOrdered = function getRandomIntInclusive(minCustomers, maxCustomers, averageCookies) { //thank you MDN
  return Math.floor(((Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers) * averageCookies); //"The maximum is inclusive and the minimum is inclusive" -MDN
}


//Store Constructor
var Store = function(name, minCustomer, maxCustomer, avgCookies) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  newAvgCookies = function() {
    return getCookiesOrdered(this.minCustomer, this.maxCustomer, this.avgCookies);
  }
}

//store array
var locations = [];
locations.push(new Store("Pioneer Square", 17, 88, 5.2));
locations.push(new Store("Portland Airport", 6, 24, 1.2));
locations.push(new Store("Washington Square", 11, 38, 1.9));
locations.push(new Store("Sellwood",20, 48, 3.3));
locations.push(new Store("Pearl District", 3, 24, 2.6));

//make table
function makeTable() {
  var table = document.getElementById("store-container");
  table.innerHTML = "<tr><th>Location</th><th>Min Customers</th><th>Max Customers</th><th>Avg Cookies</th>";
  //for loop to add info to tables
  for (var index = 0; index < locations.length; index++) {
    row = document.createElement("tr");
    cell = document.createElement("td");
    cell.innerHTML = locations[index].name;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerHTML = locations[index].minCustomer;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerHTML = locations[index].maxCustomer;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerHTML = locations[index].avgCookies;
    row.appendChild(cell);
    table.appendChild(row);
  }
}

function addStore() {
  var name = prompt("Location Name: ");
  var minCustomer = prompt("Min Customers per Hour: ");
  var maxCustomer = prompt("Max Customers per Hour: ");
  var avgCookies = prompt("Average Cookies Bought Per Customer: ");
  locations.push(new Store(name, minCustomer, maxCustomer, avgCookies));
  makeTable();
}

makeTable();
