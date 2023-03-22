import { createElement } from "./utils";

function App(){
    
    const header = createElement('header',{className:"heading",});
    const navBar = createElement('nav', {className: "navigation"});
    const main = createElement('main');
    return createElement('div', {}, [header,navBar,main]);

}


export default App; 