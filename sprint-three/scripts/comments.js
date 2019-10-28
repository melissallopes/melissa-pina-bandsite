const ALL_USERS =
  "https://project-1-api.herokuapp.com/comments?api_key=melissa";

const USERS = "https://project-1-api.herokuapp.com/comments/";

const USERS_KEY = "?api_key=melissa";

//FUNCTION FOR CREATING COMMENTS

function createComment(commentsArray) {
  const commentSection = document.querySelector(".comments__row");

  for (let i = commentsArray.length - 1; i >= 0; i--) {
    let commentOne = document.createElement("div");

    let button = document.createElement("button");

    let nameTitle = document.createElement("h2");
    nameTitle.innerText = commentsArray[i].name;

    // Function for Dynamic Timestamp

    function timeDiffer(timestamp) {
      var today = new Date();
      var current = today.getTime();

      var msPerMinute = 60 * 1000;
      var msPerHour = msPerMinute * 60;
      var msPerDay = msPerHour * 24;
      var msPerMonth = msPerDay * 30;
      var msPerYear = msPerDay * 365;

      var elapsed = current - timestamp;

      if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + " seconds ago";
      } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + " minutes ago";
      } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + " hours ago";
      } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + " days ago";
      } else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + " months ago";
      } else {
        return Math.round(elapsed / msPerYear) + " year ago";
      }
    }

    let date = timeDiffer(commentsArray[i].timestamp);
    let dateTitle = document.createElement("h3");
    dateNode = document.createTextNode(date);
    dateTitle.appendChild(dateNode);

    let commentElement = document.createElement("p");
    commentElement.innerText = commentsArray[i].comment;

    //DELETE button
    let iconDel = document.createElement("button");
    iconDel.addEventListener("click", clickEvent => {
      clickEvent.preventDefault();
      axios.delete(USERS + commentsArray[i].id + USERS_KEY).then(response => {
        commentOne.style.display = "none";
      });
    });

    //appendinding childs
    commentOne.appendChild(button);
    commentOne.appendChild(nameTitle);
    commentOne.appendChild(dateTitle);
    commentOne.appendChild(commentElement);
    commentOne.appendChild(iconDel);
    commentSection.appendChild(commentOne);

    //creating classes
    commentOne.classList.add("comments__row-class");
    button.classList.add("comments__row-button");
    nameTitle.classList.add("comments__row-name");
    dateTitle.classList.add("comments__row-date");
    commentElement.classList.add("comments__row-comment");
    iconDel.classList.add("comments__button-delete");
  }
}

//GETTING DATA FROM AXIO

let commentsArray = [];

let com = axios
  .get(ALL_USERS)
  .then(response => {
    commentsArray = response.data;
    return response.data;
  })

  .then(response => {
    createComment(response);
  });

//ADDLISTENER EVENT

let form = document.querySelector(".comments");

form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();

  //to clean the div
  document.querySelector(".comments__row").innerHTML = "";

  //creating my new object
  let newComments = {
    name: "",
    comment: ""
  };

  newComments.name = submitEvent.target.name.value;
  newComments.comment = submitEvent.target.newComment.value;

  //UNSHIFT MY NEW OBJ INTO MY ARRAY AND POSTING IT IN THE PAGE
  axios
    .post(ALL_USERS, newComments)

    .then(response => {
      response.data;

      commentsArray.push(response.data);

      createComment(commentsArray);
    });

  submitEvent.target.reset();
});
