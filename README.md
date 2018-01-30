# Node Test 1 - Simple Node Express Mongo App

## Getting Started

### Prerequisites

Make sure Node, NPM, Express, and Mongo are installed.  If Mongo is installed, you will have to disable your mongod service (maybe only on linux) as you will run a local instance.

### Installing

npm install

## Running the servers

For me specifically I like the run the servers in the same terminal in the background. YMMV

```
mongod --dbpath /user/USERNAME/PATH TO PROJECT/data/ &
npm start &
```

## Technologies Used

* Node.js
* NPM
* Express
* Express-generator
* MongoDB
* Jade
