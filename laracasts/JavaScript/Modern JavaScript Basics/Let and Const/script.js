"use strict";

let username = {
  name: "Andrew",
  email: "andrew@example.com"
};
// window.username = username;

username = {
  name: "Ashley",
  email: "ashley@example.com"
};

function init() {
  // if (true) {
  //     var email = 'andrew@example.com';
  //     let email = 'andrew@example.com';
  //     document.getElementById('output').innerHTML = email;
  // }

  document.getElementById(
    "output"
  ).innerHTML = `${username.name} (${username.email})`;
}
init();
