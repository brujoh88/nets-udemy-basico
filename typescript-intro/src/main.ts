import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { name, age} from "./bases/01-types";
import { charmander } from './bases/03-class';
import { charmander2 } from './bases/04-injection.ts';
import { charmander3 } from './bases/05-decorators.ts';
import { charmander4 } from './bases/06-decorators.ts';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <h5>${name} - ${age}</h5>
    <h1>01</h1>
    <h5>${charmander.name}</h5>
    <h1>02</h1>
    <h5>${charmander2.name}</h5>
    <h1>03</h1>
    <h5>${charmander3.name}</h5>
    <h1>04</h1>
    <h5>${charmander4.name}</h5>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
