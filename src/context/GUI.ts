import { Light } from '../objects/Light';
import { Context } from './Context';
import { ContextVistor } from './ContextVistor';
import { Renderer } from './Renderer';

export class GUI extends ContextVistor {
  renderer: Renderer;
  moving: boolean = false;
  objects: any[] = [];
  constructor(context: Context) {
    super(context);
    this.renderer = new Renderer(context);
  }

  setObjects(objects: any[]) {
    this.objects = objects;
    this.objects.splice(0, 0, new Light());
    this.renderer.setObjects(this.objects);
  }
}
