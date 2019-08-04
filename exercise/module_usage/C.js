import D from './D';

class C {
  static get() {
    return 'C' + D.get();
  }
}

export default C;