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
  newAvgCookies: function() {
    return getCookiesOrdered(this.minCustomer, this.maxCustomer, this.avgCookies);
  }
}

//store array
var locations = [];
store.push(new Store(name:"Pioneer Square", minCustomer:17, maxCustomer: 88, avgCookies: 5.2));
store.push(new Store(name:"Portland Airport", minCustomer:6, maxCustomer: 24, avgCookies: 1.2));
store.push(new Store(name:"Washington Square", minCustomer:11, maxCustomer: 38, avgCookies: 1.9));
store.push(new Store(name:"Sellwood", minCustomer:20, maxCustomer: 48, avgCookies: 3.3));
store.push(new Store(name:"Pearl District", minCustomer:3, maxCustomer: 24, avgCookies: 2.6));



//holds objects
var stores = [pioneer, airport, washington, sellwood, pearl];

//function will create unordered lists
var storeContainer = document.getElementById("store-container");
for (var storeIndex = 0; storeIndex < stores.length; storeIndex++) {
  var store = stores[storeIndex];
  var storeList = "<h3>" + store.name + "</h3>";
  var totalCookies = 0;
  for (var hourIndex = 0; hourIndex < hoursOpen.length; hourIndex++) {
    var avgCookies = store.newAvgCookies();
    storeList += "<li>" + hoursOpen[hourIndex] + ": " + avgCookies + "</li>";
    totalCookies += avgCookies;
  }
  storeList += "<li>Total: "  + totalCookies + "</li>";  //adds total to the end of hours
  storeContainer.innerHTML += storeList + "</ul>";
}
