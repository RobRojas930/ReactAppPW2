export class AlertData {
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
      <SweetAlert
        success
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="default"
        title="¡ÉXITO!"
        onConfirm={this.deleteFile}
        onCancel={this.cancelDelete}
      />
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
