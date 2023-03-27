import App from "./App.js";
import { App2 } from "./App.js"; 
import { getImages } from "./data.js";
import { DisplayAnimation } from "./utils.js";


document.getElementById("root").appendChild(App());
document.querySelector(".slogan").appendChild(App2());
getImages(1,'car','landscape');
DisplayAnimation();
