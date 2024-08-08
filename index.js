import "./index.css";
import { profile } from "./data/db.json";
import { navbar_container_logo, navbar_container_img, main_left, main_left_profile, side_bar, createPost_button, main_middle, highlineBar, post, create_message, main_right } from "@/js/common";
import { activeMessage } from "@/js/component/mainRight/activeMessage";


/* NAV */
navbar_container_logo.textContent = "TopSocial";
navbar_container_img.src = profile.img_src;

/* LEFT */
main_left.appendChild(main_left_profile);
main_left.appendChild(side_bar);
main_left.appendChild(createPost_button);

/* MIDDLE */
main_middle.appendChild(highlineBar);
main_middle.appendChild(post);

/* RIGHT */
main_right.appendChild(create_message);
activeMessage();

/* HIGHLINE */

/* CARD */

/* Message */

/* Request */
