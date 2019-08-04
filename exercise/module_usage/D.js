import E from './E.js';

class D {
  static get() {
    return 'D' + E.get();
  }
}

export default D;