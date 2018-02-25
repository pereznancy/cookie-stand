'use strict';

var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"] //hours for all stores

var table = document.getElementById("store-container");


var getCookiesOrdered = function getRandomIntInclusive(minCustomers, maxCustomers, averageCookies) { //thank you MDN
  return Math.floor(((Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers) * averageCookies); //"The maximum is inclusive and the minimum is inclusive" -MDN
}

//Store Constructor
var Store = function(name, minCustomer, maxCustomer, avgCookies) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.newAvgCookies = function() {
    return getCookiesOrdered(this.minCustomer, this.maxCustomer, this.avgCookies); //"The maximum is inclusive and the minimum is inclusive" -MDN
  }
}

//store array
var locations = [];
locations.push(new Store("Pioneer Square", 17, 88, 5.2));
locations.push(new Store("Portland Airport", 6, 24, 1.2));
locations.push(new Store("Washington Square", 11, 38, 1.9));
locations.push(new Store("Sellwood",20, 48, 3.3));
locations.push(new Store("Pearl District", 3, 24, 2.6));


//will make header row
function makeHeader(){
  var rowHeader = document.createElement("tr");
  table.appendChild(rowHeader);
  var cellLocation = document.createElement("td");
  cellLocation.textContent = "";
  rowHeader.appendChild(cellLocation);
  var totalCell = document.createElement("td");

  for (var indexHour = 0; indexHour < hoursOpen.length; indexHour++) {
    var cell = document.createElement("td");
    cell.textContent = hoursOpen[indexHour];
    rowHeader.appendChild(cell);
  }
  totalCell.textContent = "Total";
  rowHeader.appendChild(totalCell);
}

// make table for constructor
function makeTable() {
  makeHeader();
  for (var indexStore = 0; indexStore < locations.length; indexStore++) {
    var location = locations[indexStore]
    var storeRow = document.createElement("tr");
    var cell = document.createElement("td");
    cell.textContent = location.name;
    storeRow.appendChild(cell);
    console.log(location);
    table.appendChild(storeRow);

    var cookieTotal = 0;
    for (var index = 0; index < hoursOpen.length; index++) {
      var cell = document.createElement("td");
      var avgCookies = location.newAvgCookies();
      cell.textContent = avgCookies;
      storeRow.appendChild(cell);
      cookieTotal += avgCookies;
    }
    var totalCell = document.createElement("td");
    totalCell.textContent = cookieTotal;
    storeRow.appendChild(totalCell);
  }
}
makeTable();

function addStore() {
  var name = form.store.value;
  var minCustomer = form.minCustomer.value;
  var maxCustomer = form.maxCustomer.value;
  var avgCookies = form.avgCookies.value;
  locations.push(new Store(name, minCustomer, maxCustomer, avgCookies));
  makeTable();
}
