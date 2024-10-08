import "./index.css";
import { profile } from "./data/db.json";
import { navbar_container_logo, navbar_container_img, main_left, main_left_profile, side_bar, createPost_button, main_middle, highlineBar, post, create_message, main_right, messages, requests, cardlist } from "@/js/common";
import { activeMessage } from "@/js/component/mainRight/activeMessage";


/* NAV */
navbar_container_logo.textContent = "CatSpace";
navbar_container_img.src = profile.img_src;

/* LEFT */
main_left.appendChild(main_left_profile);
main_left.appendChild(side_bar);
main_left.appendChild(createPost_button);

/* MIDDLE */
main_middle.appendChild(highlineBar);
main_middle.appendChild(post);
main_middle.appendChild(cardlist);

/* RIGHT */
main_right.appendChild(create_message);
activeMessage();
create_message.appendChild(messages);
main_right.appendChild(requests);

/* HIGHLINE */

/* CARD */

/* Message */

/* Request */
