const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; // Define your bot's command prefix

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong!');
    } else if (command === 'hello') {
        message.channel.send('Hello, world!');
    }
    // Add more commands as needed
});

client.login('MTIzMTYyNDM3OTkxMDA2NjI1Ng.GiPJ1s.lUrjx6Fr75hvR6PgXhndtfEp94NENSyrIZzXW4');
