const http = require('http')
const PORT = 3000;


const routes = {
    '/': 'Node library',
    '/books': 'Books page',
    '/authors': 'authors page',
    '/publish': 'publish page',
    '/about': 'about page'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(routes[req.url])
})

server.listen(PORT, () => {
    console.log(`listening on server http://localhost:${PORT}`)
})