const { APIURL } = require('../constants.json');
import AlertData from './dialogs';
const alertData = new AlertData();
export default class API {
  constructor() {}
  getParams(params) {
    return params
      .map((e) => `${Object.keys({ element })[0]}=${element.value}`)
      .join('&');
  }
  Request({ method = 'get', headers = [], data = {}, url = '', callback }) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      let dataAlertMessage = {};
      let respData = {
        success: false,
        message: 'Ocurrió un error',
        data: {},
      };
      if (this.readyState == 4 && this.status == 200 && this.response) {
        respData = JSON.parse(this.response);
        dataAlertMessage = alertData.alertSuccess(this.response.message || '');
      } else if (
        this.status == 404 ||
        this.status == 401 ||
        this.status == 403 ||
        this.status == 405
      ) {
        console.log('Error 404');
        dataAlertMessage = alertData.alertWarning(this.response.message || '');
      } else if (this.status == 500)
        dataAlertMessage = alertData.alertError(this.response.message || '');
      else if (!this.response) {
        dataAlertMessage = alertData.alertError(this.response.message || '');
      }
      callback(respData, dataAlertMessage);
    };

    request.open(method, `${APIURL}${url}`);
    headers.forEach((element) => {
      request.setRequestHeader(element.header, element.value);
    });
    request.send(JSON.stringify(data));
  }
}
