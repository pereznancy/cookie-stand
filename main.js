var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"] //hours for all stores


//function will get cookies ordered based on random customer # & avg cookies bought
var getCookiesOrdered = function getRandomIntInclusive(minCustomers, maxCustomers, averageCookies) { //thank you MDN
  return Math.floor(((Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers) * averageCookies); //"The maximum is inclusive and the minimum is inclusive" -MDN
}


//object properties
var pioneer = {
  name: "Pioneer Square",
  minCustomer: 17,
  maxCustomer: 88,
  avgCookies: 5.2,
  newAvgCookies: function() {
    return getCookiesOrdered(this.minCustomer, this.maxCustomer, this.avgCookies);
  }
};


var airport = {
  name: "Portland Airport",
  minCustomer: 6,
  maxCustomer: 88,
  avgCookies: 5.2,
  newAvgCookies: function() {
    return getCookiesOrdered(this.minCustomer, this.maxCustomer, this.avgCookies);
  }
};

var washington = {
  name: "Washington Square",
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 1.9,
  newAvgCookies: function() {
    return getCookiesOrdered(this.minCustomer, this.maxCustomer, this.avgCookies);
  }
};

var pearl = {
  name: "Pearl District",
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 2.6,
  newAvgCookies: function() {
    return getCookiesOrdered(this.minCustomer, this.maxCustomer, this.avgCookies);
  }
};

//holds objects
var stores = [pioneer, airport, washington,pearl];

//function will creat unordered lists
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
  storeList += "<li>Total: "  + totalCookies + "</li>";
  storeContainer.innerHTML += storeList; + "</ul>";
}
