
// Receive messages from the main script
self.onmessage = function(event) {
    console.log('Message from main script:', event.data);
    
    // Send a message back to the main script
    self.postMessage('Hello from the web worker!');
  };
  /*
  const process= require('process');
  process.on('message', (message) => {
    console.log('Message from main script:', message);
  
    // Send a message back to the main script
    process.send('Hello from the child process!');
  
    // Terminate the child process
    process.exit(0);
  });
  */