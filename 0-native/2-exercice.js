import { createServer } from 'http'

createServer((request, response) => {
  const url = request.url

  if (url === '/') {
    response.write('<h1>Home</h1>')
    return response.end()
  }

  if (url === '/about') {
    response.write('<h1>Abous Us</h1>')
    return response.end()
  }

  // POST / - Parser le body de la requête

  response.writeHead(404)
  response.write('<h1>Oops!</h1>')
  response.end()
}).listen(8080)

console.log('Server listening on http://localhost:8080')