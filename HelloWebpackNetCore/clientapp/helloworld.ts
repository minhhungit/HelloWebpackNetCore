import './style.css';

// https://github.com/Microsoft/TypeScript-React-Starter/issues/12
import * as logoImg from "../clientapp/logo.png";

function component() {
    const element = document.createElement('div');
    element.innerHTML = "<div style='color:red'>afafaafa</div>";

    const myIcon = new Image();
    myIcon.src = (logoImg as any).default;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());