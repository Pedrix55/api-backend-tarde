const express = require('express');

const Contato = require('../models/sosmulher/contato');
const Smartphone = require('../models/sosmulher/smartphone');
const Telefone = require('../models/sosmulher/telefone');
const Conversa = require('../models/sosmulher/conversa');
const Mensagem = require('../models/sosmulher/mensagem');

const router = express.Router();
router.use(express.json());

module.exports = router;