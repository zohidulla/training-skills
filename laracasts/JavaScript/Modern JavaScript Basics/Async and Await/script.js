"use strict";

async function init() {
  const start = Date.now();
  document.getElementById("output").innerHTML = `0: init()`;

  const userPromise = getUserData();
  const welcomeStringPromise = getWelcomeString();

  const user = await userPromise;
  document.getElementById("output").innerHTML += `<br>${Date.now() - start}: ${
    user.name
  }`;

  const welcomeString = await welcomeStringPromise;
  document.getElementById("output").innerHTML += `<br>${
    Date.now() - start
  }: ${welcomeString}`;
}

function getUserData() {
  return new Promise((resolve, reject) => {
    let user = {
      name: "Andrew",
      email: "andrew@example.com"
    };

    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
}

function getWelcomeString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Welcome to my asyncronous program!");
    }, 2000);
  });
}

init();
