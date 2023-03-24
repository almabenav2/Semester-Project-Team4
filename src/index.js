import App from "./App.js"; 
import { getImages } from "./data.js";


document.getElementById("root").appendChild(App());
getImages(1,'car','landscape');
