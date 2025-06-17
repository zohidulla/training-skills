class Adapter {
  constructor(name) {
    this.name = name;
  }
}

class AjaxAdapter extends Adapter {
  constructor(tag) {
    super('ajaxAdapter');
    this.ajaxAdapterSpecificTag = tag;
  }

  request(url) {
    // request and return promise
    console.log('Ajax Adapter request method called!', url);
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ res: 'some Ajax request data' });
      }, 4000)
    );
  }
}

class NodeAdapter extends Adapter {
  constructor(tag) {
    super('nodeAdapter');
    this.nodeAdapterSpecificTag = tag;
  }

  request(url) {
    // request and return promise
    console.log('Node Adapter request method called!', url);
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ res: 'some Node adapter request data' });
      }, 2000)
    );
  }
}

class APIAdapter extends Adapter {
  constructor(tag) {
    super('APIAdapter');
    this.apiAdapterSpecificTag = tag;
  }

  request(url) {
    // request and return promise
    console.log('API Adapter request method called!', url);
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ res: 'some API adapter request data' });
      }, 6000)
    );
  }
}

class HTTPRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    return this.adapter.request(url).then((response) => {
      // transform response and return
      console.log('Promise was resolved!');
      console.log(response);
    });
  }
}

const nodeAdapter = new NodeAdapter('My awesome Node adapter');
console.log(nodeAdapter);
const nodeRequester = new HTTPRequester(nodeAdapter);
nodeRequester.fetch('http://test.com');
// nodeRequester.fetch('http://test2.com');
// nodeRequester.fetch('http://test3.com');
// nodeRequester.fetch('http://test4.com');

const ajaxAdapter = new AjaxAdapter('My awesome Ajax adapter');
console.log(ajaxAdapter);
const ajaxRequester = new HTTPRequester(ajaxAdapter);
ajaxRequester.fetch('http://other.com');

const apiAdapter = new APIAdapter('My awesome API adapter');
console.log(apiAdapter);
const apiRequester = new HTTPRequester(apiAdapter);
apiRequester.fetch('http://some.com');
