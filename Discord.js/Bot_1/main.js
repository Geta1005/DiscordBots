//  ________  _______  _________  ________  ________  ________  _________   //
// |\   ____\|\  ___ \|\___   ___\\   __  \|\   __  \|\   __  \|\___   ___\ //
// \ \  \___|\ \   __/\|___ \  \_\ \  \|\  \ \  \|\ /\ \  \|\  \|___ \  \_| //
//  \ \  \  __\ \  \_|/__  \ \  \ \ \   __  \ \   __  \ \  \\\  \   \ \  \  //
//   \ \  \|\  \ \  \_|\ \  \ \  \ \ \  \ \  \ \  \|\  \ \  \\\  \   \ \  \ //
//    \ \_______\ \_______\  \ \__\ \ \__\ \__\ \_______\ \_______\   \ \__\//
//     \|_______|\|_______|   \|__|  \|__|\|__|\|_______|\|_______|    \|__|//

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
