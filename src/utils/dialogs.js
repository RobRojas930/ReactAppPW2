import {Fragment} from "react/cjs/react.production.min";

export default class AlertData {
  construct() {
    this.type = 'success';
    this.title = '¡ÉXITO!';
    this.text = '';
    this.show = false;
  }

  alertSuccess(message) {
    return {
      show: true,
      type: 'success',
      title: '¡ÉXITOS!',
      message: message,
    };

  }
  alertError(message) {
    return {
      show: true,
      type: 'error',
      title: '¡ERROR!',
      message: message,
    };
  }
  alertWarning(message) {
    return {
      show: true,
      type: 'warning',
      title: '¡AVISO!',
      message: message,
    };
  }
}
