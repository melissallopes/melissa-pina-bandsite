const ALL_USERS =
  "https://project-1-api.herokuapp.com/comments?api_key=melissa";

const USER_ONE_delete =
  "https://project-1-api.herokuapp.com/comments/3611dba6-b414-45e5-a105-bcee87b7fd4e?api_key=melissa";

const USER_TWO_delete =
  "https://project-1-api.herokuapp.com/comments/9e5c96f3-ecff-4f2e-b372-17bbd82c7fe2?api_key=melissa";

const USER_THREE_delete =
  "https://project-1-api.herokuapp.com/comments/efa6198a-d252-49a9-8a5c-a761b9f443db?api_key=melissa";

//FUNCTION FOR CREATING COMMENTS

function createComment(commentsArray) {
  const commentSection = document.querySelector(".comments__row");

  for (let i = commentsArray.length - 1; i >= 0; i--) {
    let commentOne = document.createElement("div");

    let button = document.createElement("button");

    let nameTitle = document.createElement("h2");
    nameTitle.innerText = commentsArray[i].name;

    // Function for Dynamic Timestamp

    // function timeDiffer(timestamp) {

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
        return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
      } else if (elapsed < msPerYear) {
        return (
          "approximately " + Math.round(elapsed / msPerMonth) + " months ago"
        );
      } else var date = new Date(timestamp);
      function addZero(n) {
        return n < 10 ? "0" + n : n;
      }

      var dateTwo =
        addZero(date.getMonth() + 1) +
        "/" +
        addZero(date.getDate()) +
        "/" +
        date.getFullYear();

      return dateTwo;
    }

    let date = timeDiffer(commentsArray[i].timestamp);
    let dateTitle = document.createElement("h3");
    dateNode = document.createTextNode(date);
    dateTitle.appendChild(dateNode);

    let commentElement = document.createElement("p");
    commentElement.innerText = commentsArray[i].comment;

    ////////////////////////////test//////////////////////////////////

    //LIKE BUTTON
    let iconNumber = document.createElement("p");
    let iconLike = document.createElement("img");
    iconNumber.innerText = commentsArray[i].likes;

    iconLike.addEventListener("click", clickEvent => {
      axios.put(USER_ONE_like).then(response => {
        iconNumber.innerText = commentsArray.like;
      });
    });

    iconLike.classList.add("comments__row-icon-like");

    //DELETE 1 BUTTON
    let iconDel = document.createElement("img");
    iconDel.addEventListener("click", clickEvent => {
      axios.delete(USER_ONE_delete).then(response => {
        commentOne.style.display = "none";
      });
    });

    //DELETE 2 BUTTON

    iconDel.addEventListener("click", clickEvent => {
      axios.delete(USER_ONE_delete).then(response => {
        commentOne.style.display = "none";
      });
    });

    ////////////////////////////test//////////////////////////////////

    //appendinding childs
    commentOne.appendChild(button);
    commentOne.appendChild(nameTitle);
    commentOne.appendChild(dateTitle);
    commentOne.appendChild(commentElement);
    commentOne.appendChild(iconLike);
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

      commentsArray.unshift(response.data);

      createComment(commentsArray);
    });

  submitEvent.target.reset();
});
