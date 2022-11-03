const { APIURL } = require('../constants.json');
import { alertError, alertSuccess, alertWarning } from './dialogs';
export default class API {
  constructor() {}
  getParams(params) {
    return params
      .map((e) => `${Object.keys({ element })[0]}=${element.value}`)
      .join('&');
  }
  Request({
    method = 'get',
    headers = [],
    data = {},
    url = '',
    callback,
    callbackAlert,
  }) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      console.log('READYSTATE', this.readyState);
      console.log('STATUS', this.status);
      const alertData = {};
      if (this.readyState == 4 && this.status == 200) {
        callback(JSON.parse(this.response));
        alertData = alertSuccess(this.response.message);
      } else if (this.status == 404 || this.status == 401 || this.status == 403)
        alertData = alertWarning(this.response.message);
      else if (this.status == 500)
        alertData = alertError(this.response.message);
      callbackAlert(alertData);
    };
    request.open(method, `${APIURL}${url}`);
    headers.forEach((element) => {
      request.setRequestHeader(element.header, element.value);
    });
    request.send(JSON.stringify(data));
  }
}
