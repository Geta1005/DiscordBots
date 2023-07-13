const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token = "YOURTOKENHERE"
let prefix = "YOURPREFIXHERE"

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return false; 
  if (message.content === prefix+"ping") {
    message.reply(`**Pong!** ${client.ws.ping}ms`);
  }
  
});

client.login(token);
