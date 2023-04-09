const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "search",
    description: "searches for a specific script!",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "type",
            description: "the type of script you want to search for",
            type: "STRING",
            autocomplete: true,

        }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
      

        // let focused = interaction.options.getFocused(true)
        // let choices;
        // console.log(focused.name)
        // if(focused.name == 'chat') {
        //     choices = ['/sit', '/kick', '/open|close', '/chatcolor']
        //     interaction.respond('test')    

        // }        
        // const filtered = choices.filter(choice => choice.startsWith(focusedOption.value));
        // await interaction.respond(
		// 	filtered.map(choice => ({ name: choice, value: choice })),
		// );
    },
};
// /sit, /kick, ban sys, day/night cycle, disable (core gui stuff), group rank, gamepass perk, shift to sprint, welcome badge, whitelist sys