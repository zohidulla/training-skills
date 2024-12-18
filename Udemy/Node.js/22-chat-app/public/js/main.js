const socket = io();
const chatForm = document.querySelector("#chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.querySelector("#room-name");
const usersList = document.querySelector("#users");

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

socket.emit("joinRoom", { username, room });

socket.on("roomUsers", ({ room, users }) => {
  displayRoomName(room);
  displayOnlineUsers(users);
});

socket.on("message", (message) => {
  renderMessage(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = event.target.elements.msg.value;

  socket.emit("chatMessage", message);
  event.target.elements.msg.value = "";
  event.target.elements.msg.focus();
});

function renderMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `
    <p class="meta">${message.username} <span>${message.time}</span></p>
		<p class="text">${message.text}</p>
  `;
  document.querySelector(".chat-messages").appendChild(div);
}

function displayRoomName(room) {
  roomName.innerText = room;
}

function displayOnlineUsers(users) {
  usersList.innerHTML = `
  ${users.map((user) => `<li>${user.username}</li>`).join("")}`;
}
