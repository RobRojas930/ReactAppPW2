import {Fragment} from "react/cjs/react.production.min";

export default class AlertData {
  construct() {
    this.type = 'success';
    this.title = '¡ÉXITO!';
    this.text = '';
    this.show = false;
    this.onAccept = () => {};
    this.onCancel = () => {};
  }

  alertSuccess(message) {
    return (
     <Fragment></Fragment>
    );
  }
  alertError(message) {
    return {
      type: 'error',
      title: '¡ERROR!',
      message: message,
    };
  }
  alertWarning(message) {
    return {
      type: 'warning',
      title: '¡AVISO!',
      message: message,
    };
  }
}
