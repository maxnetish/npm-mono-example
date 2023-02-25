import { render } from 'preact';
import { App } from './App';
import { html } from './template';
import { currentTime, description } from 'mediadev';

const entryNode = document.getElementById('approot');

if(entryNode) {
  render(html`
    <${App}/>
  `, entryNode);
}

console.log(description);
console.log(currentTime());

export {};
