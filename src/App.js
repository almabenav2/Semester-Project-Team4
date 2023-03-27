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

export function App3(){

    const name = document.querySelector("#name").value;
    const feedback = createElement('h2',{className:"feedback", textContent:`Thank you ${name} for subscribing to our newsletter, you will be emailed with our newest offers and promotions as soon as they come out.`});
    return createElement('div',{},[feedback]);
}




export default App; 