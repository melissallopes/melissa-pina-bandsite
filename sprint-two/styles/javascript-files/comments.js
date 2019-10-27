function createComment(commentsArray) {
  const commentSection = document.querySelector(".comments__row");

  for (let i = 0; i < commentsArray.length; i++) {
    let commentOne = document.createElement("div");
    commentOne.classList.add("comments__row-class");
    commentSection.appendChild(commentOne);
    console.log("check", commentsArray[i]);

    let button = document.createElement("button");
    commentOne.appendChild(button);
    button.classList.add("comments__row-button");

    let nameTitle = document.createElement("h2");
    commentOne.appendChild(nameTitle);
    nameTitle.innerText = commentsArray[i].name;
    nameTitle.classList.add("comments__row-name");

    let dateTitle = document.createElement("h3");
    commentOne.appendChild(dateTitle);
    dateTitle.innerText = commentsArray[i].timestamp;
    dateTitle.classList.add("comments__row-date");

    let commentElement = document.createElement("p");
    commentOne.appendChild(commentElement);
    commentElement.innerText = commentsArray[i].comment;
    commentElement.classList.add("comments__row-comment");
  }
}

let com = axios
  .get("https://project-1-api.herokuapp.com/comments?api_key=melissa")
  .then(response => {
    console.log(response.data);

    return response.data;
  })

  .then(response => {
    console.log("response", response);
    createComment(response);
  });

// let commentsArray = [
//   {
//     name: "Michael Lyons",
//     comment:
//       "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
//     date: "12/18/2018"
//   },
//   {
//     name: "Gary Wong",
//     comment:
//       "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//     date: "12/12/2018"
//   },
//   {
//     name: "Theodore Duncan",
//     comment:
//       "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
//     date: "11/15/2018"
//   }
// ];

// createComment(commentsArray);

// function createComment(commentsArray) {
//   const commentSection = document.querySelector(".comments__row");

//   for (let i = 0; i < com.length; i++) {
//     let commentOne = document.createElement("div");
//     commentOne.classList.add("comments__row-class");
//     commentSection.appendChild(commentOne);

//     let button = document.createElement("button");
//     commentOne.appendChild(button);
//     button.classList.add("comments__row-button");

//     let nameTitle = document.createElement("h2");
//     commentOne.appendChild(nameTitle);
//     nameTitle.innerText = commentsArray[i].name;
//     nameTitle.classList.add("comments__row-name");

//     let dateTitle = document.createElement("h3");
//     commentOne.appendChild(dateTitle);
//     dateTitle.innerText = commentsArray[i].date;
//     dateTitle.classList.add("comments__row-date");

//     let commentElement = document.createElement("p");
//     commentOne.appendChild(commentElement);
//     commentElement.innerText = com[i].comment;
//     commentElement.classList.add("comments__row-comment");
//   }
// }

let form = document.querySelector(".comments");

form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();

  document.querySelector(".comments__row").innerHTML = "";

  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let todayDate = day + "/" + month + "/" + year;

  let formNewComments = { name: "", comment: "", date: todayDate };

  formNewComments.name = submitEvent.target.name.value;
  formNewComments.comment = submitEvent.target.newComment.value;
  // console.log(formNewComments);
  // console.log(commentsArray);
  commentsArray.unshift(formNewComments);

  createComment(commentsArray);

  submitEvent.target.reset();
});
