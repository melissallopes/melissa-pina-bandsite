const showInfo = [
  {
    date: "Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA"
  },
  {
    date: "Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA"
  },
  {
    date: "Jul 22 2019",
    venue: "View Loungue",
    location: "San Fancisco, CA"
  },
  {
    date: "Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA"
  },
  {
    date: "Sep 05 2019",
    venue: "Pres Club",
    location: "San Fancisco, CA"
  }
];

function tableMobile(table, showInfo) {
  let rowTop = table.insertRow();
  rowTop.classList.add("shows__tablet-top");
  let cellTop = rowTop.insertCell();
  let textTop = document.createTextNode("DATE");
  cellTop.appendChild(textTop);
  cellTop.classList.add("shows__tablet-head-date");

  let cellTopSec = rowTop.insertCell();
  let textTopSec = document.createTextNode("VENUE");
  cellTopSec.appendChild(textTopSec);
  cellTopSec.classList.add("shows__tablet-head-venue");

  let cellTopThird = rowTop.insertCell();
  let textTopThird = document.createTextNode("LOCATION");
  cellTopThird.appendChild(textTopThird);
  cellTopThird.classList.add("shows__tablet-head-location");

  for (show of showInfo) {
    let row = table.insertRow();
    row.classList.add("shows-table");

    for (key in show) {
      let cell = row.insertCell();
      cell.classList.add("shows__mobile-table-title");
      let cellTwo = row.insertCell();
      cellTwo.classList.add("shows__mobile-table-value");
      let text = document.createTextNode(key);
      let textTwo = document.createTextNode(show[key]);
      cell.appendChild(text);
      cellTwo.appendChild(textTwo);
    }

    let cell = row.insertCell();
    cell.classList.add("shows__mobile-button");
    let text = document.createTextNode("BUY TICKETS");
    cell.appendChild(text);
    // let rowTwo = table.insertRow();
    // let cell = rowTwo.insertCell();
    // cell.classList.add("shows__mobile-button");
    // let text = document.createTextNode("BUY TICKETS");
    // cell.appendChild(text);
  }
}

let table = document.querySelector(".table-mobile");

//let showKeys = Object.keys(showInfo[0]);
// function invocation
tableMobile(table, showInfo);
