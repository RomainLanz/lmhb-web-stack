import { createServer } from 'http'

function readableToString(readable) {
  return new Promise((resolve, reject) => {
    let data = ''
    readable.on('data', (chunk) => data += chunk)
    readable.on('end', () => resolve(data))
    readable.on('error', (err) => reject(err))
  })
}

createServer(async (request, response) => {
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
      const data = await readableToString(request)
      console.log(data)
      
      response.writeHead(302, {
        'Location': '/'
      })
      return response.end()
    }
  }

  response.writeHead(404)
  response.write('<h1>Oops!</h1>')
  response.end()
}).listen(8080)

console.log('Server listening on http://localhost:8080')