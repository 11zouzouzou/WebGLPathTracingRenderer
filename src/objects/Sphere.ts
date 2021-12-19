import { Vector } from '../math/Vector';

export class Sphere {
  center: Vector;
  radius: number;
  centerStr: string;
  radiusStr: string;
  intersectStr: string;
  temporaryTranslation: Vector;
  constructor(center: Vector, radius: number, id: number) {
    this.center = center;
    this.radius = radius;
    this.centerStr = 'sphereCenter' + id;
    this.radiusStr = 'sphereRadius' + id;
    this.intersectStr = 'tSphere' + id;
    this.temporaryTranslation = Vector.create([0, 0, 0]);
  }

  getGlobalCode() {
    return '' + ' uniform vec3 ' + this.centerStr + ';' + ' uniform float ' + this.radiusStr + ';';
  }

  getIntersectCode() {
    return '' + ' float ' + this.intersectStr + ' = intersectSphere(origin, ray, ' + this.centerStr + ', ' + this.radiusStr + ');';
  }

  getShadowTestCode() {
    return '' + this.getIntersectCode() + ' if(' + this.intersectStr + ' < 1.0) return 0.0;';
  }

  getMinimumIntersectCode() {
    return '' + ' if(' + this.intersectStr + ' < t) t = ' + this.intersectStr + ';';
  }

  getNormalCalculationCode() {
    return '' + ' else if(t == ' + this.intersectStr + ') normal = normalForSphere(hit, ' + this.centerStr + ', ' + this.radiusStr + ');';
  }

  setUniforms(renderer: any) {
    renderer.uniforms[this.centerStr] = this.center.add(this.temporaryTranslation);
    renderer.uniforms[this.radiusStr] = this.radius;
  }

  temporaryTranslate(translation: Vector) {
    this.temporaryTranslation = translation;
  }

  translate(translation: Vector) {
    this.center = this.center.add(translation) as Vector;
  }

  getMinCorner() {
    return (this.center.add(this.temporaryTranslation) as Vector).subtract(Vector.create([this.radius, this.radius, this.radius]));
  }

  getMaxCorner() {
    return (this.center.add(this.temporaryTranslation) as Vector).add(Vector.create([this.radius, this.radius, this.radius]));
  }

  intersect(origin: Vector, ray: Vector) {
    return Sphere.intersect(origin, ray, this.center.add(this.temporaryTranslation) as Vector, this.radius);
  }
  static intersect(origin: Vector, ray: Vector, center: Vector, radius: number) {
    const toSphere = origin.subtract(center) as Vector;
    const a = ray.dot(ray);
    const b = 2 * toSphere.dot(ray);
    const c = toSphere.dot(toSphere) - radius * radius;
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
      const t = (-b - Math.sqrt(discriminant)) / (2 * a);
      if (t > 0) {
        return t;
      }
    }
    return Number.MAX_VALUE;
  }
}
