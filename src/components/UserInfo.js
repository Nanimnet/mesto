export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(
      profileDescriptionSelector
    );
    this._profileAvatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    return {
      profileName: this._profileName.textContent,
      profileDescription: this._profileDescription.textContent,
    };
  }

  setUserInfo(name, description) {
    if (name, description) {
      this._profileName.textContent = name;
      this._profileDescription.textContent = description;
     }
  }

  setUserAvatar(link){
    if(link) { 
      this._profileAvatar.src = link;
    }
  }
}
