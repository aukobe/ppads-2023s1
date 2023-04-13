const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

/**
 *  Aluno Routes 
*/
router.get('/', alunoController.homepage);
router.get('/about', alunoController.about);
router.get('/add', alunoController.addAluno);
router.post('/add', alunoController.postAluno);
router.get('/view/:id', alunoController.view);
router.get('/edit/:id', alunoController.edit);
router.put('/edit/:id', alunoController.editPost);
router.delete('/edit/:id', alunoController.deleteAluno);

router.post('/search', alunoController.searchAlunos);



module.exports = router;