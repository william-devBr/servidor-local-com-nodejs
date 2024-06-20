/** servidor local com Nodejs*/
const http = require('http')
require('dotenv').config()

const server = http.createServer((req,res)=> {
   res.writeHead(200,{'Content-type' : 'application-json'})
   res.end(JSON.stringify({
           data: 'Hello World'
      }))
})

const port = process.env.PORT || 3000
server.listen(port,()=> {
  console.log(`servidor na porta ${port}`)
})
