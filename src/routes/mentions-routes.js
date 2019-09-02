const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions);

router.post('/', [
        check('friend').isLength({min:7}).withMessage('O nome precisa ter no minimo 7 caracteres'),
        check('mention').isLength({min:20, max:280}).withMessage('A menção precisa ter no minimo 20 e no maximo 280 caracteres.')
    ], 
    mentionsController.createMention);

router.put('/:id', [
        check('friend').isLength({min:7}).withMessage('O nome precisa ter no minimo 7 caracteres'),
        check('mention').isLength({min:20, max:280}).withMessage('A menção precisa ter no minimo 20 e no maximo 280 caracteres.')
    ], 
    mentionsController.updateMention);

router.delete('/:id', mentionsController.deleteMention);

module.exports = router;