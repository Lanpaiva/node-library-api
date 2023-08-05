const http = require('http')
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('node')
})

server.listen(PORT, () => {
    console.log(`listening on link http://localhost:${PORT}`)
})