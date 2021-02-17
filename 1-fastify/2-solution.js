import fastify from 'fastify'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const server = fastify()
const db = await open({ filename: ':memory:', driver: sqlite3.Database })
await db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT NOT NULL UNIQUE)`)

server.get('/', async (_, response) => {
  const results = await db.get('SELECT * FROM users')
  console.log(results)
  response.type('text/html').send('<h1>Home</h1>')
})

server.get('/about', (_, response) => {
  response.type('text/html').send('<h1>Abous Us</h1>')
})

server.post('/', async (request, response) => {
   await db.run('INSERT INTO users (email) VALUES (:email)', {
    ':email': request.body.email
  })

  response.redirect(302, '/')
})

server.get('*', (_, response) => {
  response.code(404).type('text/html').send('<h1>Oops</h1>')
})

server.listen(8080)
console.log('Server listening on http://localhost:8080')