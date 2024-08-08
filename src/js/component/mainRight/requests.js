export class Requests {

  constructor(info) {
    this.info = info; // construct the json info
  }

  createRequests = () => {
    this.dom = document.createElement("div");
    this.dom.innerHTML = `<h2>Requests</h2>`;

    this.info.forEach(item => {
      const requestsInfo = new RequestsInfo(item).createInfo();
      this.dom.appendChild(requestsInfo);
    });

    return this.dom;
  }
}

class RequestsInfo {

  constructor(info) {
    this.name = info.name;
    this.src = info.src;
    this.number = info.mutualFriendNum;
  }

  createInfo = () => {
    this.dom = document.createElement("div");
    this.dom.className = "requestsInfo";
    this.dom.innerHTML = `
    <div class="profile">
      <img class="profile-photo" src="${this.src}">
      <div class="profile-info">
        <h3>${this.name}</h3>
        <p>${this.number}Mutual Friends</p>
      </div>
    </div>
    <div class="button">
      <button class = "btn btn-primary post">Accept</button>
      <button class = "btn decline">Decline</button>
    </div>
    `
    return this.dom;
  }
}

