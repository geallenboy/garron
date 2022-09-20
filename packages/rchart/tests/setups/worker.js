class Worker {
  constructor(stringUrl) {
    this.url = stringUrl;
    // eslint-disable-next-line
    this.onmessage = jest.fn();
  }

  postMessage(msg) {
    this.onmessage(msg);
  }
}

window.Worker = Worker;
