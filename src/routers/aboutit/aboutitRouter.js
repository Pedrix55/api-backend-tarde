const express = require('express');

const Comunidade = require("../../models/aboutit/comunidade");
const Post = require("../../models/aboutit/post");

const router = express.Router();
router.use(express.json());

const comunidadeRouter = require("./comunidadeRouter");
const postRouter = require('./postRouter');

router.use("/comunidade", comunidadeRouter);
router.use('/post', postRouter);

module.exports = router;