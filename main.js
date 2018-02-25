var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"] //hours for all stores

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

//make table for constructor
function makeTable() {
  var table = document.getElementById("store-container");
  for (indexStore = 0; indexStore < locations.length; indexStore++) {
    table.innerHTML += "<tr><th>" + locations[indexStore].name + "</th><th>Cookies</th></tr>";
    var totalCookies = 0
    for (indexHour = 0; indexHour < hoursOpen.length; indexHour++) {
      var cookiesPerHour = locations[indexStore].newAvgCookies();
      table.innerHTML +="<tr><td>" + hoursOpen[indexHour] + "</td><td>" + cookiesPerHour + "</td>"
      totalCookies += cookiesPerHour;
    }
    table.innerHTML += "<tr><td>Total: </td><td>" + totalCookies + "</tr></td>"
  }
}

makeTable();
