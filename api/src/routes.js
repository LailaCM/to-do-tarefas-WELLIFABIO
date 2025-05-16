const express = require('express')
const router = express.Router()

const Usuario = require('./controllers/Controllerusuario')
const Tarefas = require('./controllers/Controllertarefas')

router.post('/usuarios', Usuario.create)
router.get('/usuarios', Usuario.read)

router.post('/tarefas', Tarefas.create)
router.get('/tarefas', Tarefas.read)
router.put('/tarefas/:id', Tarefas.update)
router.delete('/tarefas/:id', Tarefas.remove)

module.exports = router
