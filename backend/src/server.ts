import express from 'express'
import './database/connection'

const app = express()

app.use(express.json())

/* Rota = conjunto
Recurso = usuário
Métodos HTTP = GET, POST, PUT E delete
GET = BUSCAR UMA INFORMAÇÃO
POST = CRIANDO UMA INFORMAÇÃO
PUT = EDITANDO UMA INFORMAÇÃO
DELETE = DELETANDO UMA INFORMAÇÃO
Query Params: http://localhost:3333/users?search=diego&page=2
Route Params: http://localhost:3333/users/1 (Identificar um recurso)
Body: http://localhost:3333/users/1 (Identificar um recurso)
app.post("/users/:id", (req, res) => {
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)
    return res.json({ message: "Hello World!" })
}) */

app.get("/users", (req, res) => {
    return res.json({ message: "Hello World!" })
})

app.listen(3333)