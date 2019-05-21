export default class AnimationFrame {
  constructor() {
    this._frame = (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      (callback => window.setTimeout(callback, 1000 / 100))
    );
  }

  get frame() {
    return this._frame;
  }
}
