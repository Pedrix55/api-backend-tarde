const express = require('express');

const Comunidade = require('../models/sosmulher/comunidade');
const Usuario = require('../models/sosmulher/usuario');
const Post = require('../models/sosmulher/post');

const router = express.Router();
router.use(express.json());

module.exports = router;