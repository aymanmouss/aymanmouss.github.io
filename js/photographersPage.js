const card = document.getElementsByClassName("card");
const photos = document.getElementsByClassName("photos");
const idLocation = window.location.search.split("?id=")[1];
const modal = document.querySelector(".modal");
const total = document.getElementsByClassName("total");
const one = document.getElementById("1");
import LightBoxClass from "./photographersPages/lightBox.js";
import FormModal from "./photographersPages/form.js";
import Likes from "./photographersPages/likes.js";
import TotalLikes from "./photographersPages/totalLikes.js";
import DropDown from "./photographersPages/dropDown.js";
import MediaDisplay from "./photographersPages/mediaDisplay.js";
import FormData from "./photographersPages/formData.js";

fetch("./photographers.json")
  .then((res) => res.json())
  .then((data) => {
    //   Media list
    data.media.map((item) => {
      if (item.photographerId == idLocation) {
        photos[0].innerHTML += new MediaDisplay().photoLsit(item);
      }
    });
    //  photographer Card
    data.photographers.map((item) => {
      if (item.id == idLocation) {
        // Media
        card[0].innerHTML += new MediaDisplay().cardlist(item);
        // Form
        modal.innerHTML = new FormModal().modal(item);
        // class TotalLikes
        new TotalLikes(item);
      }
    });
    new FormData();
    // *********************************************
    // DropDown Menu
    new DropDown(data);
    // *********************************************
    // Likes
    new Likes(data);
  });

//LightBox;
new LightBoxClass();
