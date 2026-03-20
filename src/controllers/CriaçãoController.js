const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const data = req.body;

    const item = await prisma.criacao.create({
        data
    });

    res.json(item).status(201).end();
};
const listar = async (req, res) => {
    const lista = await prisma.criacao.findMany({
        include: {
            produtoPersonalizado: true
        }
    });

    res.json(lista).status(200).end();
};
const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.criacao.findUnique({
        where: { id: Number(id) },
        include: {
            produtoPersonalizado: true
        }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.criacao.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};
const excluir = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.criacao.delete({
        where: { id: Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
};