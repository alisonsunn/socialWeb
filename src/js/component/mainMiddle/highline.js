export class Highline {
  highlineBar = null;

  constructor(highlineBar) {
    this.highlineBar = highlineBar;
  }

  createHighline = (highlineItems) => {
    const highline = document.createElement("div");
    highline.className = "highlineItems";
    highlineItems.forEach(item => {
      const newItem = new highlineItem(item);
      highline.appendChild(newItem.createHighlineItem());
    });
    return highline;
  }
}

class highlineItem {
  highlineItem = null;

  constructor(highlineItem) {
    this.highlineItem = highlineItem;
  }

  createHighlineItem = () => {
    const items = document.createElement("div");
    const profile = document.createElement("div");
    const title = document.createElement("p");
    profile.innerHTML = `<img src="${this.highlineItem.img_src}">`
    profile.className = "profile-photo";
    items.className = "highlineItem";
    items.style.backgroundImage = `url('${this.highlineItem.background}')`;
    title.innerText = `${this.highlineItem.title}`
    items.appendChild(profile);
    items.appendChild(title);
    return items;
}
}   