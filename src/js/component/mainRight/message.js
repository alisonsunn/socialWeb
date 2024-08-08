export class Message {
  message = null;

  constructor(message) {
    this.message = message;
  }

  createMessage = (messages) => {
    const messageContainer = document.createElement("div");
    messageContainer.className = "messageContainers";
    messages.forEach(item => {
      const messageItems = new MessageItem(item).createMessageItem();
      messageContainer.appendChild(messageItems);
    });
    return messageContainer;
  }
}

class MessageItem {
  messageItem = null;

  constructor(messageItem) {
    this.messageItem = messageItem;
  }

  createMessageItem = () => {
    const container = document.createElement("div");
    container.className = "messageContainer";
    // profile
    const profile = document.createElement("div");
    profile.innerHTML = `<img src="${this.messageItem.src}">`;
    profile.className = "profile-photo";
    container.appendChild(profile);
    // name & message
    const name = document.createElement("h1");
    name.innerHTML = `${this.messageItem.name}`;
    const message = document.createElement("p");
    message.innerHTML = `${this.messageItem.msg}`;
    const nameAndMessage = document.createElement("div");
    nameAndMessage.appendChild(name);
    nameAndMessage.appendChild(message);
    container.appendChild(nameAndMessage);

    return container;
  }

}