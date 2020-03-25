import _ from 'lodash';
import './style.css';
import img from './logo.png';
import printMe from './printMe.js';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    const myIcon = new Image();
    myIcon.src = img;
    element.appendChild(myIcon);

    console.log("hello world");
    // alert("test");

    return element;
}

document.body.appendChild(component());