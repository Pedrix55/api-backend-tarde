const express = require("express");

const router = express.Router();

const PlaylistModel = require("../../playlistApp/models/playlist");

router.get("/", async (req, res) => {
  const playlist = await PlaylistModel.findAll();
  res.send(playlist);
});

router.get("/:id", async (req, res) => {
  const playlist = await PlaylistModel.findByPk(req.params.id);
  res.send(playlist);
});

router.post("/", async (req, res) => {
  //salvar
  let playlist = await PlaylistModel.build(req.body); //create/build
  playlist = await playlist.save();
  res.send(playlist);
});

router.put("/:id", async (req, res) => {
  //atualizar
  let playlist = await PlaylistModel.findByPk(req.params.id);

  playlist = await playlist.update(req.body);
  res.send(playlist);
});

router.delete("/:id", async (req, res) => {
  //delete
  let playlist = await PlaylistModel.findByPk(req.params.id);
  playlist.destroy();
  res.status(204).send();
});

module.exports = router;
