const express = require("express");

const usarioModel = require("./usuarioModel");
const Atividade = require("./atividadeModel");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const alunos = await usarioModel.findAll({ include: "atividades" });
  res.send(alunos);
});

router.get("/:id", async (req, res) => {
  const aluno = await usarioModel.findByPk(req.params.id, {
    include: "atividades",
  });
  res.send(aluno);
});

router.get("/matricula/:matricula", async (req, res) => {
  const aluno = await usarioModel.findOne({
    where: {
      matricula: req.params.matricula,
    },
    include: "atividades",
  });
  res.send(aluno);
});

router.post("/", async (req, res) => {
  //salvar
  let aluno = await usarioModel.build(req.body); //create/build
  aluno = await aluno.save();
  res.send(aluno);
});

router.put("/:id", async (req, res) => {
  //atualizar
  let aluno = await usarioModel.findByPk(req.params.id);
  aluno.pontuacao = req.body.pontuacao;

  aluno = await aluno.save(aluno);

  res.send(aluno);
});

router.delete("/:id", async (req, res) => {
  //delete
  let aluno = await usarioModel.findByPk(req.params.id);
  aluno.destroy();

  res.status(204).send();
});

router.post("/:id/atividade", async (req, res) => {
  const aluno = await usarioModel.findByPk(req.params.id, {
    include: "atividades",
  });
  const atividade = await Atividade.build(req.body);
  atividade.data_envio = Date.now();
  atividade.aluno_id = aluno.id;

  const result = await atividade.save();
  res.send(result);
});

router.put("/:id/atividade/:idAtividade", async (req, res) => {
  const aluno = await usarioModel.findByPk(req.params.id, {
    include: "atividades",
  });
  const atividade = await Atividade.findByPk(req.params.idAtividade);

  atividade.update({ ...atividade, ...req.body });
  atividade.data_envio = Date.now();

  const result = await atividade.save();
  res.send(result);
});

module.exports = router;
