const userModel = require('../models/userModel');

class userController {
    async salvar(req, res) {
        let user = req.body;
        const max = await userModel.findOne({}).sort({ id: -1 });
        user.id = max == null ? 1 : max.id + 1;
        const resultado = await userModel.create(user);
        res.status(201).json(resultado);
    }
    async listar(req, res) {
        const resultado = await userModel.find({});
        res.status(200).json(resultado);
    }
    async buscarPorId(req, res) {
        const id = req.params.id;
        const resultado = await userModel.findOne({ 'id': id });
        res.status(200).json(resultado);
    }
    async buscarPorNome(req, res) {
        const nome = req.params.nome;
        const regex = new RegExp(nome, "i");
        const resultado = await userModel.find({ nome: regex });
        res.status(200).json(resultado);
    }
    async buscarPorSobrenome(req, res) {
        const sobrenome = req.params.sobrenome;
        const regex = new RegExp(sobrenome, "i");
        const resultado = await userModel.find({ sobrenome: regex });
        res.status(200).json(resultado);
    }
    async buscarPorCidade(req, res) {
        const cidade = req.params.cidade;
        const regex = new RegExp(cidade, "i");
        const resultado = await userModel.find({ cidade: regex });
        res.status(200).json(resultado);
    }
    async buscarPorEstado(req, res) {
        const estado = req.params.estado;
        const regex = new RegExp(estado, "i");
        const resultado = await userModel.find({ estado: regex });
        res.status(200).json(resultado);
    }
    async buscarPorStatus(req, res) {
        const status = req.params.status;
        const regex = new RegExp(status, "i");
        const resultado = await userModel.find({ status: regex, 'status': { $eq: status } });
        res.status(200).json(resultado);
    }
    async atualizar(req, res) {
        const id = req.params.id;
        const _id = String((await userModel.findOne({ 'id': id }))._id);
        await userModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }
    async excluir(req, res) {
        const id = req.params.id;
        const _id = String((await userModel.findOne({ 'id': id }))._id);
        await userModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new userController();