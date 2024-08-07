export const createPost = (profileInfo) => {
  const postContenter = document.createElement("div");
  const profile = document.createElement("div");
  profile.className = "createPost";
  profile.innerHTML = 
  `<div class="profile-photo">
    <img src="${profileInfo.img_src}">
  </div>
  <input type="text" placeholder="What's in your mind? ${profileInfo.name}">
  <button class = "btn btn-primary post">post</button>
  `
  postContenter.appendChild(profile);
  return postContenter;
}