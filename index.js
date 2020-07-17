const http = require("http");
const express = require("express");
const Discord = require("discord.js");
const fetch = require("isomorphic-unfetch");

const app = express();
const client = new Discord.Client();

app.get("/", (req, res) => {
  console.log(`${new Date().toISOString()} INFO - Ping received`);
  res.status(200).json({ message: "pong!!" });
});

app.listen(process.env.PORT, () => {
  console.log(
    `${new Date().toISOString()} INFO - App started on port ${
      process.env.PORT
    }!`
  );
});

setInterval(() => {
  http.get(`https://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.once("ready", () => {
  console.log(`${new Date().toISOString()} INFO - Bot ready!!`);
});

const prefix = "!";

client.on("message", async message => {
  if (message.content.startsWith(`${prefix}candeploy`)) {
    try {
      const response = await fetch(
        "https://shouldideploy.today/api?tz=America/Sao_Paulo"
      );
      const data = await response.json();

      message.channel.send(
        `${data.shouldideploy ? "👍" : "👎"} ${data.message}`
      );
    } catch (err) {
      message.channel.send(`❌ ERROR! ${err.message}`);
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
