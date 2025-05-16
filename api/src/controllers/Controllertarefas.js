const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const criarTarefa = async (req, res) => {
  const { descricao, setor, prioridade, usuarioId } = req.body;

  if (!descricao || !setor || !prioridade || !usuarioId) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  try {
    const tarefa = await prisma.tarefa.create({
      data: { descricao, setor, prioridade, usuarioId }
    });
    return res.status(201).json(tarefa);
  } catch (error) {
    console.error("Erro ao cadastrar tarefa:", error);
    return res.status(400).json({ erro: 'Erro ao cadastrar tarefa', detalhes: error.message });
  }
};

const listarTarefas = async (req, res) => {
  try {
    const tarefas = await prisma.tarefa.findMany({ include: { usuario: true } });
    return res.json(tarefas);
  } catch (error) {
    return res.status(400).json({ erro: 'Erro ao listar tarefas', detalhes: error.message });
  }
};

const atualizarTarefa = async (req, res) => {
  const { id } = req.params;
  const { descricao, setor, prioridade, status } = req.body;

  try {
    const tarefa = await prisma.tarefa.update({
      where: { id: Number(id) },
      data: { descricao, setor, prioridade, status }
    });
    return res.status(202).json(tarefa);
  } catch (error) {
    return res.status(400).json({ erro: 'Erro ao atualizar tarefa', detalhes: error.message });
  }
};

const deletarTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.tarefa.delete({ where: { id: Number(id) } });
    return res.status(204).send();
  } catch (error) {
    return res.status(404).json({ erro: 'Erro ao deletar tarefa', detalhes: error.message });
  }
};

module.exports = {
  create,
  read,
  update,
  remove
};
