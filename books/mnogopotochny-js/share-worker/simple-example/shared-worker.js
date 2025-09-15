const ports = new Set();

self.onconnect = (event) => {
    const port = event.ports[0];
    ports.add(port);
    port.onmessage = (event) => {
        for (let p of ports) {
            p.postMessage(event.data);
        }
    };
};