// const showInfo = [
//   {
//     date: "Dec 17 2018",
//     venue: "Ronald Lane",
//     location: "San Fancisco, CA"
//   },
//   {
//     date: "Jul 18 2019",
//     venue: "Pier 3 East",
//     location: "San Fancisco, CA"
//   },
//   {
//     date: "Jul 22 2019",
//     venue: "View Loungue",
//     location: "San Fancisco, CA"
//   },
//   {
//     date: "Aug 12 2019",
//     venue: "Hyatt Agency",
//     location: "San Fancisco, CA"
//   },
//   {
//     date: "Sep 05 2019",
//     venue: "Pres Club",
//     location: "San Fancisco, CA"
//   }
// ];

table SPRINT 2

const table = document.querySelector(".table-mobile");

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
  }
}


// function invocation
// tableMobile(table, showInfo);

let shows = axios
  .get("https://project-1-api.herokuapp.com/showdates?api_key=melissa")
  .then(response => {
    console.log(response.data);

    return response.data;
  })

  .then(response => {
    console.log("response", response); //testing
    createDivMobile(response);
  });
















//testing- create div

// function createDivMobile(showInfo) {
//   const mainDiv = document.querySelector(".table-mobile");

//   for (let i = 0; i < showInfo.length; i++) {
//     let divOne = document.createElement("div");
//     divOne.classList.add("div-class");
//     mainDiv.appendChild(divOne);

//     let dateKey = document.createElement("p");
//     divOne.appendChild(date[key]);
//     dateKey.innerText = showInfo[i].date[key];
//     dateKey.classList.add("date-class-key");

//     let date = document.createElement("p");
//     divOne.appendChild(date);
//     date.innerText = showInfo[i].date;
//     date.classList.add("date-class");

//     let location = document.createElement("p");
//     divOne.appendChild(location);
//     location.innerText = showInfo[i].location;
//     location.classList.add("name-class");

//     let place = document.createElement("p");
//     divOne.appendChild(place);
//     place.innerText = showInfo[i].place;
//     place.classList.add("place-class");
//   }
// }
