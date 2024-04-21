`use strict`;

let photo;
let followers;
const url = `https://api.github.com/users/coolprogrammerarpit007`;
const xhr = new XMLHttpRequest();
xhr.open(`GET`, url);

// All above means client been created but request does not send yet so open need to be called yet.
// console.log(xhr.readyState);// tells about state of request.

// now to continously track state
xhr.onreadystatechange = () => {
  // console.log(xhr.readyState);

  if (xhr.readyState === 4) {
    // need to convert this data from string to object.
    const user = JSON.parse(xhr.responseText);

    followers = user.followers;
    photo = user["avatar_url"];
    // console.log(followers);
    // console.log(photo);

    // Injecting into html
    const createCard = function (followers, url) {
      const div = document.createElement("div");
      const img = document.createElement(`img`);
      img.src = `${url}`;
      const heading = document.createElement(`h1`);
      heading.innerText = `${followers}`;
      div.append(img, heading);
      document.querySelector(`body`).append(div);
    };

    createCard(followers, photo);
  }
};
xhr.send();
