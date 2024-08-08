import {profile, sidebar, highline, message} from "../../data/db.json";
import { Profile } from "./component/mainLeft/profile";
import {Sidebar} from "./component/mainLeft/sidebar";
import {PostButton} from "./component/mainLeft/postButton";
import { createPost } from "./component/mainMiddle/createPost";
import {Highline} from "./component/mainMiddle/highline"
import { createMessage } from "./component/mainRight/createMessage";
import { Message } from "./component/mainRight/message";

/* NavBar */
export const navbar = document.querySelector('nav');
export const navbar_container = navbar.querySelector('.container');
export const navbar_container_logo = navbar_container.querySelector('.logo');
export const navbar_container_searchBar = navbar_container.querySelector('.search-bar');
export const navbar_container_create = navbar_container.querySelector('.create');
export const navbar_container_img = navbar_container.querySelector('img');
console.log(navbar_container);


/* Main */
export const main = document.querySelector('main');
export const main_container = main.querySelector('.container');


/* Main Left */

export const main_left = main_container.querySelector('.main-left');
// profoile
const main_profile = new Profile(profile.img_src, profile.name, profile.at)
export const main_left_profile = main_profile.createProfile(); 
// sidebar
export const side_bar = new Sidebar(sidebar).createSideBar();
// createPost Button
export const createPost_button = new PostButton().createPostButton();

/* Main Middle */
export const main_middle = main_container.querySelector('.main-middle');
export const highlineBar = new Highline().createHighline(highline);

export const post = createPost(profile);

/* Main Right */
export const main_right = main_container.querySelector(".main-right");
export const create_message = createMessage();
export const messages = new Message().createMessage(message);
/* Create Profile */


/* Create Picture */


/* Create Control */


/* Create Comment */


/* Main Right */