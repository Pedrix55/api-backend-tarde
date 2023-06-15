const express = require("express");

const router = express.Router();

const AnotacaoModel = require("../../src/blocoDeNotas/anotacoesModel");
const UsuarioModel = require("../usuarioModel");

router.get("/", async (req, res) => {
  const anotacao = await AnotacaoModel.findAll();
  res.send(anotacao);
});

router.get("/:id", async (req, res) => {
  const anotacao = await AnotacaoModel.findByPk(req.params.id);
  res.send(anotacao);
});

router.get("/usuario/:id/anotacoes", async (req, res) => {
    const usuario = await UsuarioModel.findByPk(req.params.id,{
        include:'anotacoes'
    });
    res.send(usuario);
  });
  

router.post("/", async (req, res) => {
  //salvar
  let anotacao = await AnotacaoModel.build(req.body); //create/build
  anotacao = await anotacao.save();
  res.send(anotacao);
});

router.put("/:id", async (req, res) => {
  //atualizar
  let anotacao = await AnotacaoModel.findByPk(req.params.id);

  anotacao = await anotacao.update(req.body);
  res.send(anotacao);
});

router.delete("/:id", async (req, res) => {
  //delete
  let anotacao = await AnotacaoModel.findByPk(req.params.id);
  anotacao.destroy();
  res.status(204).send();
});

module.exports = router;
