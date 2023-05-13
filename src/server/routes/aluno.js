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
router.get('/addFaltaPage/:id', alunoController.addFaltaPage)
router.get('/addfaltaMat/:id', alunoController.adicionarFaltaMat);
router.get('/addfaltaHist/:id', alunoController.adicionarFaltaHist);
router.get('/addfaltaPort/:id', alunoController.adicionarFaltaPort);
router.get('/addfaltaBio/:id', alunoController.adicionarFaltaBio);
router.get('/addfaltaQuim/:id', alunoController.adicionarFaltaQuim);
router.get('/addfaltaFilo/:id', alunoController.adicionarFaltaFilo);
router.get('/addfaltaFis/:id', alunoController.adicionarFaltaFis);

module.exports = router;