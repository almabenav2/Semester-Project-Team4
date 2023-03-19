import { createElement } from "./utils";

function App(){
    
    const header = createElement('h1', {textContent:"HELLO WORLD", className:"heading",});
    const main = createElement('main');
    return createElement('div', {}, [header,main]);
}

export default App; 