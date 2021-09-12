// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// *****************************************************************************
// 1. Declare a variable, tbody
// 2. Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
// *****************************************************************************

function buildTable(data) {

    tbody.html(""); // this line clears any data in the table so that the user isnt working with already filtered data
    
    data.forEach((dataRow) => {
        let row = tbody.append("tr"); // this tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr")
        
        Object.values(dataRow).forEach((val) => { // each 'sighting' is an object and we want all the sighting data as 1 row
            let cell = row.append("td"); // append the data of the current object into the row
            cell.text(val);
        });
    });
}

// Create a new function using D3 to capture a filter 'click'
function handleClick() {

    let date = d3.select("#datetime").property("value"); // .select will find the first thing that matces '#datetime'
                                                         // .property("value") actually grabs the data we selected for
    let filteredData = tableData; // tableData is the original table

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date); // find the rows that MATCH the datetime inputed
        console.log(filteredData)
        // build the table for the filtered data
        buildTable(filteredData);
    };

}

d3.selectAll("#filter-btn").on("click", handleClick); // this is how the code LISTENS for the event 'click filter btn'

// Call the original table once the webpage is loaded
buildTable(tableData);