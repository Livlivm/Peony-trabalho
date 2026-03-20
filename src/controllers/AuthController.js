const prisma = require("../data/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
      
        const usuario = await prisma.usuario.findUnique({
            where: { email }
        });

        if (!usuario) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

    
        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(401).json({ mensagem: "Senha inválida" });
        }

 
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            process.env.JWT_SECRET || "segredo",
            { expiresIn: "1d" }
        );

        res.status(200).json({
            mensagem: "Login realizado com sucesso",
            token,
            usuario
        });

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

module.exports = {
    login
};
