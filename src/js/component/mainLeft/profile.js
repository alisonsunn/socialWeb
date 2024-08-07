// export function createProfile(profile_img, profile_name, profile_at) {
//   const profileInfo = document.createElement('a');
//   profileInfo.className = 'profile';
//   profileInfo.innerHTML =
//     `<div class="profile-photo">
//     <img src="${profile_img}">
// </div >
//     <div class="profile-description">
//       <h2>${profile_name}</h2>
//       <p>${profile_at}</p>
//     </div>`
//   return profileInfo;
// }

export class Profile {
  profile_img = null;
  profile_name = null;
  profile_at = null;

  constructor(profile_img, profile_name, profile_at) {
    this.profile_img = profile_img;
    this.profile_name = profile_name;
    this.profile_at = profile_at;
  }

  createProfile = () => {
    const profileInfo = document.createElement('a');
    profileInfo.className = 'profile';
    profileInfo.innerHTML =
      `<div class="profile-photo">
    <img src="${this.profile_img}">
      </div >
    <div class="profile-description">
      <h2>${this.profile_name}</h2>
      <p>${this.profile_at}</p>
    </div>`
    return profileInfo;
  }
}