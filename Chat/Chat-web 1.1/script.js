const socket = io("http://localhost:3000");

const messageContainer = document.getElementById("mensagem-conteiner");
const messageForm = document.getElementById("mandar-container");
const messageInput = document.getElementById("mensagem-input");

const name = prompt("Qual o seu nome?", "Usuário");

appendMessage("Seja bem vindo");

//Simulação
appendMessage("Atendente: Blabla blabla blablabla");
appendMessage("Você: Blublublu Blu Blublu!");
appendMessage("Atendente Saiu");

socket.emit("new-user", name);

socket.on("chat-message", data => {
  appendMessage(`${data.name}: ${data.message}`);
});

socket.on("user-connected", name => {
  appendMessage(`${name} Entrou`);
});

socket.on("user-disconnected", name => {
  appendMessage(`${name} Saiu`);
});

messageForm.addEventListener("submit", e => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`Você: ${message}`);
  socket.emit("send-chat-message", message);
  messageInput.value = "";
});

function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}
