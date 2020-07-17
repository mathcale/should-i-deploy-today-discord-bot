const http = require('http');
const express = require('express');
const Discord = require('discord.js');

const app = express();
const client = new Discord.Client();

app.get('/', (req, res) => {
  console.log(`${new Date().toISOString()} INFO - Ping received`);
  res.status(200).json({ message: 'pong!' });
});

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', () => {
  
});

client.login(process.env.DISCORD_BOT_TOKEN);
app.listen(process.env.PORT, () => {
  console.log(${new Date().toISOString()} INFO - App started!`)
});