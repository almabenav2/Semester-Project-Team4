import App from "./App"; 
import { getImages, displayNav } from "./data";


document.getElementById("root").appendChild(App());
getImages(1,'car','landscape');
