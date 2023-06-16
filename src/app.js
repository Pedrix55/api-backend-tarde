const express = require('express');
const env = require('dotenv/config');

const usuarioRouter = require("./usuarioRouter");
const libelulaRouter = require("./routers/libelula/libelulaRouter");
const aboutItRouter = require("./routers/aboutit/aboutitRouter");
const sosmulherRouter = require("./routers/sosmulher/sosMulherRouter");
const PlaylistRouter = require("./playlistApp/routers/playlist");
const anotacaoRouter = require("./blocoDeNotas/anotacoesRouter")

const database = require("./db");

const app = express();
app.use(express.json());

app.use("/usuario", usuarioRouter);
app.use("/libelula", libelulaRouter);
app.use("/aboutit", aboutItRouter);
app.use("/sosmulher", sosmulherRouter);
app.use("/playlist", PlaylistRouter);
app.use("/anotacao", anotacaoRouter);

app.listen(process.env.PORT | 3000, async () => {
  const resultDb = await database.sync({});
  console.log("server started");
});