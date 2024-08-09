export class CardList {
  #cards = null;
  #dom = null;

  constructor(cards = []) {
    this.#cards = cards;
  }

  #createCardList = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("cardlist");

    this.#cards.forEach(card => {
      this.#dom.appendChild(new Card(card).createCard());
    });

    return this.#dom;
  }

  get createCardList() {
    return this.#createCardList;
  }

  get dom() {
    return this.#dom;
  }
}

class Card {
  #card = null;
  #dom = null;

  constructor(card = {}) {
    this.#card = card;
  }

  #createCard = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("card");
    this.#dom.appendChild(new InfoProfile(this.#card.profile).build());
    this.#dom.appendChild(new InfoPicture(this.#card.picture).build());
    this.#dom.appendChild(new InfoComment(this.#card.comment).build());

    return this.#dom;
  }

  get createCard() {
    return this.#createCard;
  }
}

class InfoProfile {
  #info = null;
  #dom = null;

  constructor(info) {
    this.#info = info;
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("info-profile");
    this.#dom.innerHTML = `
      <div class="profile">
        <div class="profile-photo">
          <img src="${this.#info.src}">
        </div>
        <div class="profile-description">
          <h2>${this.#info.name}</h2>
          <p>${this.#info.position}, ${this.#info.time}</p>
        </div>
      </div>
      <i class="uil uil-ellipsis-h"></i>
    `
    return this.#dom;
  }

  get build() {
    return this.#build;
  }

  get dom() {
    return this.#dom;
  }
}

class InfoPicture {
  #dom = null;
  #info = null;

  constructor(info) {
    this.#info = info;
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.innerHTML = `
      <img class="info-imgs" src="${this.#info.img_src}">
    `
    return this.#dom;
  }

  get build() {
    return this.#build;
  }
}

class InfoComment {
  #info = null;
  #dom = null;

  constructor(info) {
    this.#info = info;
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("commentContainer");
    this.#likeCommentProfile();
    this.#commentContent();
    this.#viewNumber();
    return this.#dom;
  }

  #viewNumber = () => {
    const viewNumber = document.createElement("p");
    viewNumber.className = "viewNumber";
    viewNumber.innerHTML = `
    View all ${this.#info.view_number} comments
    `
    this.#dom.appendChild(viewNumber);
  }

  #commentContent = () => {
    const comments = document.createElement("p");
    comments.className = "comments";
    comments.innerHTML = `
    ${this.#info.comment_info}
    `
    this.#dom.appendChild(comments);
  }
  
  #likeCommentProfile = () => {
    const dom = document.createElement("div");
    dom.classList.add("profile-photo-list");

    this.#createPhotoList(dom);
    this.#createLikeInfo(dom);
    this.#dom.appendChild(dom);
  }

  #createPhotoList = (dom) => {
    this.#info.img_src_list.forEach(item => 
      {
        const photoList = document.createElement("img");
        photoList.classList.add("profile-photo");
        photoList.classList.add("comment");
        photoList.src = item; // the src of img can not use innerHTML
        dom.appendChild(photoList);
      });
  }

  #createLikeInfo = (dom) => {
    const infoLists = document.createElement("span");
    infoLists.innerHTML = `
      Liked by <strong> ${this.#info.first_people_name}</strong> and <strong>${this.#info.like_peoples_number}</strong> others
    `
    dom.appendChild(infoLists);
  }

  get build() {
    return this.#build;
  }

}