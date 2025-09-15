class User {
    constructor(name) {this.name = name}
    hello() {console.log(`Hello, ${this.name}!`)}
}

const worker = new SharedWorker('shared-worker.js');
worker.port.onmessage = (event) => {
    console.log(event.data === user)
};

//const user = new User('Ivan')
const user = {name: 'Ivan'}

worker.port.postMessage(user);