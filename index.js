const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, './db/data.json'))


server.use(jsonServer.defaults())
server.use(router)
server.listen(8000, () => {
  console.log('JSON Server is running')
})