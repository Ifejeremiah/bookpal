const mongoose = require('mongoose');

let dbURI = 'mongodb://localhost/bookpal';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
  })
  .on('error', err => {
    console.log(`Mongoose connection error:\n${err}`);
  })
  .on('disconnected', () => {
    console.log('Mongoose disconnected!');
  });

const readLine = require('readline');
if (process.platform === 'win32') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('SIGINT', () => {
    process.emit("SIGINT");
  });
}

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

// require('./locations');