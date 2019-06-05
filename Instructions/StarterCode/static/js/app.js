var aliens = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
d3.select(tbody).html("")
// Console.log the  data from data.js
console.log(data);


// use  Arrow Functions!
data.forEach((aliens) => {

  var row = tbody.append("tr");

  Object.values(aliens).forEach((value) => {

    row.append("td").text(value);

  });
});

// Assign the data from `data.js` to a descriptive variable


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  // console.log(aliens);
 
  var tbody = d3.select("tbody");
  d3.select("tbody").html("")
  var filteredData = aliens.filter(x => x.datetime === inputValue);
  
    console.log(filteredData);
  
      filteredData.forEach((y) => {

        var row = tbody.append("tr");

         Object.values(y).forEach((value) => {

           row.append("td").text(value);
     });

     });
  
 });  
