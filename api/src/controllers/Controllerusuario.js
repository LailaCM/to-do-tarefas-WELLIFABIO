const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const create = async (req, res) => {
  const { nome, email } = req.body;
  try {
    const user = await prisma.usuario.create({ data: { nome, email } });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ erro: 'Erro ao cadastrar usuário', detalhes: error.message });
  }
};
const read = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    return res.json(usuarios);
  } catch (error) {
    return res.status(400).json({ erro: 'Erro ao listar usuários', detalhes: error.message });
  }
};
module.exports = { create, read }
