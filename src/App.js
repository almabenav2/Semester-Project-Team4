import { createElement } from "./utils.js";

function App(){
    
    const header = createElement('header',{className:"heading",});
    const navBar = createElement('nav', {className: "navigation"});
    return createElement('div', {}, [header,navBar]);

}

export function App2(){
    const slogan = createElement('h1',{className:'slog',textContent:'With us you hire the best car at the best price'})
    return createElement('div',{},[slogan]);
}



export default App; 