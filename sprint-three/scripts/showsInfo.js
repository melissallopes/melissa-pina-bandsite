let postComment = {
  message: "Post body must have a 'comment' property and a 'name' property"
};

let shows = axios
  .get("https://project-1-api.herokuapp.com/showdates?api_key=melissa")
  .then(response => {
    console.log(response.data);

    return response.data;
  })

  .then(response => {
    createDivMobile(response);
  });

let showsi = axios.post(postComment);

//testing- create div

function createDivMobile(showInfo) {
  const mainDiv = document.querySelector(".table-mobile");

  let divTablet = document.createElement("div");

  let dateTablet = document.createElement("p");
  dateTablet.innerText = "DATE";

  let venueTablet = document.createElement("p");
  venueTablet.innerText = "VENUE";

  let locationTablet = document.createElement("p");
  locationTablet.innerText = "LOCATION";

  // appending childs
  divTablet.appendChild(dateTablet);
  divTablet.appendChild(venueTablet);
  divTablet.appendChild(locationTablet);
  mainDiv.appendChild(divTablet);

  // classes for tablet and desk titles
  divTablet.classList.add("tablet__div");
  dateTablet.classList.add("tablet__class-date");
  venueTablet.classList.add("tablet__class-venue");
  locationTablet.classList.add("tablet__class-location");

  for (let i = 0; i < showInfo.length; i++) {
    let divOne = document.createElement("div");

    //date key and date data
    let dateKey = document.createElement("p");
    dateKey.innerText = "DATE";

    let date = document.createElement("p");
    date.innerText = showInfo[i].date;

    //venue key and data

    let venueKey = document.createElement("p");
    venueKey.innerText = "VENUE";

    let place = document.createElement("p");
    place.innerText = showInfo[i].place;

    //location key and data

    let locationKey = document.createElement("p");
    locationKey.innerText = "LOCATION";

    let location = document.createElement("p");
    location.innerText = showInfo[i].location;

    //button buy tickets

    let button = document.createElement("button");
    button.innerText = "BUY TICKETS";

    //appending childs

    divOne.appendChild(dateKey);
    divOne.appendChild(date);
    divOne.appendChild(venueKey);
    divOne.appendChild(place);
    divOne.appendChild(locationKey);
    divOne.appendChild(location);
    divOne.appendChild(button);
    mainDiv.appendChild(divOne);

    // classes
    divOne.classList.add("div-class");
    dateKey.classList.add("class__mobile-date");
    date.classList.add("class__date");
    venueKey.classList.add("class__mobile-place");
    place.classList.add("class__place");
    locationKey.classList.add("class__mobile-location");
    location.classList.add("class__name");
    button.classList.add("class__button");
  }
}
