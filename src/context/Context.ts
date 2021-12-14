export class Context {
  gl: WebGL2RenderingContext | WebGLRenderingContext;
  constructor(public canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('webgl2');
    this.gl = gl as WebGL2RenderingContext;
    if (!this.gl) this.gl = canvas.getContext('webgl') as WebGLRenderingContext;
  }
}
