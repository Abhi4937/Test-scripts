// Create a web worker from a separate JavaScript file
const worker = new Worker('web_worker.js');
console.log(worker);

// Send a message to the worker
worker.postMessage('Hello from the main thread!');

// Receive messages from the worker
worker.onmessage = function(event) {
  console.log('Received message from worker:', event.data);
};

// Terminate the worker when done
//worker.terminate();

/*

const { fork } = require('child_process');

// Create a child process
const worker = fork('web_worker.js');

// Send a message to the child process
worker.send('Hello from the main script!');

// Receive messages from the child process
worker.on('message', (message) => {
  console.log('Message from child process:', message);
});

// Terminate the child process when done
worker.on('exit', (code) => {
  console.log('Child process exited with code:', code);
});
*/
