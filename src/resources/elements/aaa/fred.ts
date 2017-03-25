import {bindable} from 'aurelia-framework';

export class Fred {
  @bindable value;

  valueChanged(newValue, oldValue) {

  }
}

