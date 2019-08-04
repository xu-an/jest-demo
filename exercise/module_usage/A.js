import B from './B';
import C from './C';

class A {
  static get() {
    return 'A' + B.get() + C.get();
  }
}

export default A;