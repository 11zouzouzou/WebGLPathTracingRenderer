import { Vector } from '../math/Vector';
  //TODO
 const light:Vector = Vector.create([0.4, 0.5, -0.6]);
 const lightSize = 0.1;

export class Light {
  temporaryTranslation: Vector;
  constructor() {
    this.temporaryTranslation = Vector.create([0, 0, 0]);
  }

  static clampPosition (position:Vector) {
    for(var i = 0; i < position.elements.length; i++) {
      position.elements[i] = Math.max(lightSize - 1, Math.min(1 - lightSize, position.elements[i]));
    }
  };

  getGlobalCode () {
    return 'uniform vec3 light;';
  };
  
  getIntersectCode () {
    return '';
  };
  
  getShadowTestCode () {
    return '';
  };
  
  getMinimumIntersectCode () {
    return '';
  };
  
  getNormalCalculationCode () {
    return '';
  };
  
  // setUniforms (renderer:any) {
  //   renderer.uniforms.light = light.add(this.temporaryTranslation);
  // };

  
  // temporaryTranslate (translation) {
  //   var tempLight = light.add(translation);
  //   Light.clampPosition(tempLight);
  //   this.temporaryTranslation = tempLight.subtract(light);
  // };
  
  // translate (translation) {
  //   light = light.add(translation);
  //   Light.clampPosition(light);
  // };
  
  getMinCorner () {
    return (light.add(this.temporaryTranslation) as Vector).subtract(Vector.create([lightSize, lightSize, lightSize]));
  };
  
  getMaxCorner () {
    return (light.add(this.temporaryTranslation) as Vector).add(Vector.create([lightSize, lightSize, lightSize]));
  };
  
  // intersect (origin, ray) {
  //   return Number.MAX_VALUE;
  // };
}
