import discord
from discord.ext import commands
from discord.ui import Button, View, Select

token = 'YOURTOKENHERE'
prefix = 'YOURPREFIXHERE'
status = [
  "online",
  "game"
]

intents = discord.Intents.all();
bot = commands.Bot(command_prefix=prefix, intents=intents)

@bot.event
async def on_ready():
  await bot.change_presence(status=discord.Status[status[0]],activity=discord.Game(status[1]))
  print(str(gettimedate())+' | '+'Logged as {0.user}'.format(bot))
@bot.event
async def on_message(message):
    content = message.content
    author = message.author
  
    if author == client.user:
      return

    def cmd(syntax):
      if content.startswith(prefix+syntax):
        return True

    if cmd('ping'):
      await message.reply('**Pong!** '+str(round(bot.latency*1000))+'ms')
     
bot.run(token)
