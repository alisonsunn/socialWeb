// export function createPost() {
//   const button = document.createElement("label");
//   button.className = "btn btn-primary create-post";
//   button.textContent = "Create Post";
//   return button;
// }

export class PostButton {

  constructor() {
    this.button = document.createElement("label");
    this.button.className = "btn btn-primary create-post";
    this.button.innerText = "Create Post";
  }

  createPostButton = () => {
    return this.button;
  }
}