const express = require('express');

const Cliente = require('../../models/libelula/cliente');
const Produto = require('../../models/libelula/produto');

const Favorito = require('../../models/libelula/favorito');

const router = express.Router();
router.use(express.json());

module.exports = router;