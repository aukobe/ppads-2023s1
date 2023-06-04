const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

/**
 *  Aluno Routes 
*/
router.get('/', alunoController.homepage);
router.get('/add', alunoController.addAluno);
router.post('/add', alunoController.postAluno);
router.get('/view/:id', alunoController.view);
router.get('/edit/:id', alunoController.edit);
router.put('/edit/:id', alunoController.editPost);
router.delete('/edit/:id', alunoController.deleteAluno);

router.post('/search', alunoController.searchAlunos);
router.get('/chamada', alunoController.chamada);
router.get('/relatorio', alunoController.relatorio);
router.get('/relatorioMat', alunoController.relatorioMat);
router.get('/relatorioHist', alunoController.relatorioHist);
router.get('/relatorioPort', alunoController.relatorioPort);
router.get('/relatorioBio', alunoController.relatorioBio);
router.get('/relatorioQuim', alunoController.relatorioQuim);
router.get('/relatorioFilo', alunoController.relatorioFilo);
router.get('/relatorioFis', alunoController.relatorioFis);
router.get('/enviarNotificacao/:id', alunoController.enviarNotificacao);
router.get('/addFaltaPage/:id', alunoController.addFaltaPage)
router.get('/addfaltaMat/:id', alunoController.adicionarFaltaMat);
router.get('/addfaltaHist/:id', alunoController.adicionarFaltaHist);
router.get('/addfaltaPort/:id', alunoController.adicionarFaltaPort);
router.get('/addfaltaBio/:id', alunoController.adicionarFaltaBio);
router.get('/addfaltaQuim/:id', alunoController.adicionarFaltaQuim);
router.get('/addfaltaFilo/:id', alunoController.adicionarFaltaFilo);
router.get('/addfaltaFis/:id', alunoController.adicionarFaltaFis);

module.exports = router;