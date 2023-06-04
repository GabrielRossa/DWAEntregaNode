const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.listar);
router.post('/', userController.salvar);
router.put('/:id', userController.atualizar);
router.delete('/:id', userController.excluir);

router.get('/:id', userController.buscarPorId);
router.get('/nome/:nome', userController.buscarPorNome);
router.get('/sobrenome/:sobrenome', userController.buscarPorSobrenome);
router.get('/cidade/:cidade', userController.buscarPorCidade);
router.get('/estado/:estado', userController.buscarPorEstado);

module.exports = router;