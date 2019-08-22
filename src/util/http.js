import axios from 'axios';
import qs from 'qs';

export default async ({ method = 'get', url, data = {}, xForm = false }) => {
  try {
    let reqData = {};
    let headers = {};
    let sData = data;
    if (xForm) {
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
      sData = qs.stringify(data);
    }
    if (method.toLowerCase() === 'get') {
      reqData = { method, url, headers, params: sData };
    } else {
      reqData = { method, url, headers, data: sData };
    }
    const res = await axios(reqData);
    return res.data;
  } catch (error) {
    throw error;
  }
};
