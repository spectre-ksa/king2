const Discord = require('discord.js');
const client = new Discord.Client();
var adminprefix = "1"

//bc
const prefix = "1"



client.on('message', message => {
  if(message.content.startsWith(prefix + 'bc')) {
            if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(!args) return message.channel.send(`**:rolling_eyes: please type the broadcast message**`)
  let filter = m => m.author.id == message.author.id
  let broadcastt = new Discord.RichEmbed()
  .setColor('#36393e')
  .addField(`**[1] broadcast for all members\n\n[2] broadcast for online members\n\n[0] to cancel**`,`** **`)
  message.channel.send(broadcastt).then(msg => {
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 90000,
    errors: ['time']
  })
  .then(collected => {
    if(collected.first().content === '1') {
      message.channel.bulkDelete(1)
  message.channel.send(`**Broadcast begin send to \`${message.guild.members.size}\` members....**`);
  msg.delete()
     return message.guild.members.forEach(m => {
  m.send(args.replace('[user]', m))
      })
  }
  if(collected.first().content === '2') {
    msg.delete()
    message.channel.bulkDelete(1)
    message.channel.send(`**Broadcast begin send to \`${message.guild.members.filter(m=>m.presence.status == 'online').size}\` members....**`);
  message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(args.replace('[user]', m)) 
  })
  message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
    m.send(args.replace('[user]', m)) 
  })
  return message.guild.members.filter(m => m.presence.status === 'idle').forEach(m => {
    m.send(args.replace('[user]', m)) 
  })
    }
  if(collected.first().content === '0') {
    message.channel.bulkDelete(1)
    msg.delete()
    return message.channel.send(`**Broadcast Has Been Canseled**`);
  }})})}
  });






client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  

const developers = ["492756531884851210","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.TOKEN);
