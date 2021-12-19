import { Context } from './context/Context';
import { GUI } from './context/GUI';

console.warn('start');

const canvas = document.createElement('canvas');
canvas.id = 'userCanvas';
canvas.width = 500;
canvas.height = 500;
canvas.style.border = '1px solid';
document.body.appendChild(canvas);

const context = new Context(canvas);
const gui = new GUI(context);
