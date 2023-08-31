
document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  function sendMessage(messageText, isUser) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");

    const messageContent = document.createElement("div");
    messageContent.textContent = messageText;
    
    const timestamp = document.createElement("div");
    timestamp.textContent = getCurrentTime();
    timestamp.className = "timestamp";

    messageDiv.appendChild(timestamp);
    messageDiv.appendChild(messageContent);
    chatBox.appendChild(messageDiv);

    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    if (!isUser) {
      setTimeout(() => sendBotResponse(messageText), 1000);
    }
  }

  function sendBotResponse(userMessage) {
    const botResponses = [
      "Hello there!",
      "How can I assist you?",
      "That's interesting!",
      "I'm a simple bot.",
      "Tell me more!"
    ];
    const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
    sendMessage(randomResponse, false);
  }

  function getCurrentTime() {
    const now = new Date();
    return `${now.getHours()}:${formatMinutes(now.getMinutes())}`;
  }

  function formatMinutes(minutes) {
    return minutes < 10 ? `0${minutes}` : minutes;
  }

  sendButton.addEventListener("click", () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== "") {
      sendMessage(messageText, true);
    }
  });

  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendButton.click();
    }
  });
});
