const jsonServer=require('json-server');
const path = require('path')

const server=jsonServer.create();

// const router=jsonServer.router('db.json');
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middleware=jsonServer.defaults();

const PORT=3000;

server.use(middleware);
server.use(router);



server.listen(PORT,()=>{console.log("server running successfully")})