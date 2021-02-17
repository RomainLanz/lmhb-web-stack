import fastify from 'fastify'

const server = fastify()

server.get('/', (_, response) => {
  response.type('text/html').send('<h1>Home</h1>')
})

server.get('/about', (_, response) => {
  response.type('text/html').send('<h1>Abous Us</h1>')
})

server.post('/', (request, response) => {
  console.log(request.body)
  response.redirect(302, '/')
})

server.get('*', (_, response) => {
  response.code(404).type('text/html').send('<h1>Oops</h1>')
})

server.listen(8080)
console.log('Server listening on http://localhost:8080')