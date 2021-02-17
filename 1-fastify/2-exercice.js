import fastify from 'fastify'

const server = fastify()
// Créer une connexion à la base de données.
// Créer la table si elle n'existe pas déjà

server.get('/', (_, response) => {
  // Afficher dans la console les utilisateurs
  response.type('text/html').send('<h1>Home</h1>')
})

server.get('/about', (_, response) => {
  response.type('text/html').send('<h1>Abous Us</h1>')
})

server.post('/', (request, response) => {
  // Stocker un nouvel utilisateur avec son email
  console.log(request.body)
  response.redirect(302, '/')
})

server.get('*', (_, response) => {
  response.code(404).type('text/html').send('<h1>Oops</h1>')
})

server.listen(8080)
console.log('Server listening on http://localhost:8080')