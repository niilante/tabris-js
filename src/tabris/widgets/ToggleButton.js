import NativeObject from '../NativeObject';
import Widget from '../Widget';

export default class ToggleButton extends Widget {

  get _nativeType() {
    return 'tabris.ToggleButton';
  }

  _listen(name, listening) {
    if (name === 'select') {
      this._nativeListen(name, listening);
    } else if (name === 'change:checked') {
      this._onoff('select', listening, this.$triggerChangeChecked);
    } else {
      super._listen(name, listening);
    }
  }

  $triggerChangeChecked({checked}) {
    this._triggerChangeEvent('checked', checked);
  }

}

NativeObject.defineProperties(ToggleButton.prototype, {
  text: {type: 'string', default: ''},
  image: {type: 'image', default: null},
  checked: {type: 'boolean', nocache: true},
  alignment: {type: ['choice', ['left', 'right', 'center']], default: 'center'}
});
