const axios =require('axios');

const requestMethod = (_method, _endpoint, _options, _body) => {
  let methodObj;
  if (_method === 'post') {
    methodObj = axios.post(_endpoint, _body, _options)
  } else if (_method === 'get') {
    methodObj = axios.get(_endpoint, _options)
  } else if (_method === 'put') {
    methodObj = axios.put(_endpoint, _body, _options)
  } else if (_method === 'patch') {
    methodObj = axios.patch(_endpoint, _body, _options)
  } else if (_method === 'delete') {
    methodObj = axios.delete(_endpoint, _options)
  } else {
    methodObj = axios.post(_endpoint, _body, _options)
  }
  return methodObj
}


  exports.sendRequest= async (_method, _endpoint, _options, _body) => {
    try {
      const responseObject = await requestMethod(_method, _endpoint, _options, _body)
      return {
        headers: responseObject.headers ? responseObject.headers : {},
        body: responseObject.data ? responseObject.data : {},
        status: responseObject.status ? responseObject.status : "",
        statusText: responseObject.statusText ? responseObject.statusText : "",
        isError: false
      };
    } catch (error) {
      return {
        headers: error.headers ? error.headers : {},
        body: error.data ? error.data : {},
        status: error.status ? error.status : "",
        statusText: error.statusText ? error.statusText : "",
        isError: true
      };
    }
  }
