module.exports = {
    name: 'setname',
    async execute(message) {

		let guildName = 'chipiron.es';
        await message.guild.setIcon('./i/3.png');
        await message.guild.setName(guildName);
    }
};