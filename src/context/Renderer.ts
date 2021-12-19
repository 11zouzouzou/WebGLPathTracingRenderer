import { Context } from './Context';
import { ContextVistor } from './ContextVistor';

export class Renderer extends ContextVistor {
  objects: any[] = [];
  selectedObject: any[] | null = null;
  constructor(context:Context){
      super(context);
      //TODO(next)
  }
  setObjects(objects: any[]) {
    this.objects = objects;
    this.selectedObject = null;
    //TODO(next)
    // this.pathTracer.setObjects(objects);
  }
}
