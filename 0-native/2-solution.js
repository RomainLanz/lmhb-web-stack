import { createServer } from 'http'

createServer((request, response) => {
  const url = request.url
  const method = request.method

  if (method === 'GET') {
    if (url === '/') {
      response.write('<h1>Home</h1>')
      return response.end()
    }

    if (url === '/about') {
      response.write('<h1>Abous Us</h1>')
      return response.end()
    }
  }

  if (method === 'POST') {
    if (url === '/') {
      let data = ''
      request.on('data', (chunk) => data += chunk)
      request.on('end', () => {
        console.log(data)
        response.writeHead(302, {
          'Location': '/'
        })

        return response.end()
      })

      // Et si pas de payload?
    }
  }

  response.writeHead(404)
  response.write('<h1>Oops!</h1>')
  response.end()
}).listen(8080)

console.log('Server listening on http://localhost:8080')