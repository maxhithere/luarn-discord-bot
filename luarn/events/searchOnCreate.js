const client = require("../index");

client.on("interactionCreate", async (interaction) => {

    if (interaction.commandName === 'search') {
        const focusedValue = interaction.options.getFocused();
		const choices = ['chat', 'part', 'camera', 'player', 'game', 'system', 'gui', 'badge', 'leaderstats', 'internal'];
		const filtered = choices.filter(choice => choice.startsWith(focusedValue));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
        }

        
});
