import { Vector } from "../math/Vector";
import { RenderObject } from "./RenderObject";
import { Sphere } from "./Sphere";

class MakeObjectsMethod {
    static makeSphereColumn() {
        var objects = [];
        objects.push(new Sphere(Vector.create([0, 0.75, 0]), 0.25, RenderObject.nextObjectId++));
        objects.push(new Sphere(Vector.create([0, 0.25, 0]), 0.25, RenderObject.nextObjectId++));
        objects.push(new Sphere(Vector.create([0, -0.25, 0]), 0.25, RenderObject.nextObjectId++));
        objects.push(new Sphere(Vector.create([0, -0.75, 0]), 0.25, RenderObject.nextObjectId++));
        return objects;
      }
}