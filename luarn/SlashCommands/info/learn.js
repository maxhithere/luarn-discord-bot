const { Client, CommandInteraction } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { TextInputComponent, Modal, ButtonInteraction } = require("discord.js");
module.exports = {
    name: "learn",
    description: "start learning luaU!",
    type: 'CHAT_INPUT',
 
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {


      async function wait(ms) {
        const wait = require('util').promisify(setTimeout);
        return wait(ms);
      }



        const filter = (i) => i.user.id === interaction.user.id
        const filter2 = (interaction) => interaction.customId === 'variable';

        let embed = new MessageEmbed()
        .setTitle('LuaU')
        .setDescription('LuaU is a scripting language that is used in Roblox. It is a very powerful language that can be used to create many different things! LuaU is used to create scripts, plugins, and more!')
        .addField('Where to start?', 'To start learning LuaU, you can use the [Roblox Developer Hub](https://developer.roblox.com/en-us/articles/Roblox-Developer-Hub) to learn the basics of LuaU. You can also use the [Roblox Lua API](https://developer.roblox.com/en-us/api-reference/lua-docs) to learn more about the functions and methods that you can use in LuaU. Additonaly, this tutorial will help you tremendously in learning the language.')
       .setFooter({text: 'Luarn', iconURL: `${client.user.displayAvatarURL()}`})
        .setColor('RANDOM')
        .setTimestamp()
       
        const row = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
            .setCustomId('primary')
            .setLabel('Start')
            .setStyle('SUCCESS'),
        );

        let msg = await interaction.reply({ embeds: [embed], components: [row], fetchReply: true });
        const collector = interaction.channel.createMessageComponentCollector({
            filter, 
            time: 60000, 
          })


         collector.on('collect', async (i) => { 
                    if(i.customId === 'primary') {
                      msg.delete()
                        let embed2 = new MessageEmbed()
                        .setTitle('LuaU Tutorial')
                        .setDescription(`Let's start with the basics! For the first lesson, we are going to learn how to create a simple variable.\n A variable is a value that can be changed. To create a variable, you need to type 'local' and then the name of the variable.\n For example, if you want to create a variable called 'test', you would type 'local test'. Click on the button below and write a variable for 'dog'`)
                       .setFooter({text: 'Luarn', iconURL: `${client.user.displayAvatarURL()}`})
                        .setColor('RANDOM')
                        .setTimestamp()
                       
                  

                        const row2 = new Discord.MessageActionRow()
                        .addComponents(
                          new Discord.MessageButton()
                            .setCustomId('primaryyy')
                            .setLabel('Script')
                            .setStyle('SECONDARY'),
                        );

                        const Input = new TextInputComponent()
                        .setCustomId('variable')
                        .setLabel("Write a variable with the name of 'dog'!")
                        
                        .setStyle('SHORT');
                        const firstActionRow = new Discord.MessageActionRow().addComponents(Input);

                        let yy = await interaction.channel.send({ embeds: [embed2], components: [row2] });

                        const collector22 = yy.channel.createMessageComponentCollector({
                          filter, 
                          time: 60000, 
                        })
                        collector22.on('collect', async (i) => { 
                          if(i.customId === 'primaryyy') {
                            const modal = new Modal()  
                            .setTitle('Input the variable here')
                            .setCustomId('variable');
                            modal.addComponents(firstActionRow);
                            await i.showModal(modal);

                        
                           let t = await i.awaitModalSubmit({ filter, time: 30_000 })
                        console.log(t.fields.getTextInputValue('variable'))
                        if(t) {
                          if(t.fields.getTextInputValue('variable') == 'local dog'){
                            let embed3 = new MessageEmbed()
                            .setTitle(`LuaU Tutorial`)
                            .setDescription(`That was correct, good job! You can also redeclare variables if you want to change the value. Example:\n \`\`\`local tree = 'tree'\ntree = 'leaf'\nprint(tree) -- this prints 'leaf'\`\`\`\n\n\nThis will automatically change in 10 seconds.`)
                            .setFooter({text: 'Luarn', iconURL: `${client.user.displayAvatarURL()}`})
                            .setColor('RANDOM')
                            .setTimestamp()
                       
                            await t.reply({
                             embeds: [embed3],
                             fetchReply: true
                            })
                            await wait(10000)
                            let embed4 = new MessageEmbed()
                            .setTitle(`LuaU Tutorial`)
                            .setDescription(`Now that you know how to create a variable, let's learn how to create a function!\n A function is a block of code that can be called upon. To create a function, you need to type 'function' and then the name of the function.\n For example, if you want to create a function called 'test', you would type 'function test()'. Click on the button below and write a function for 'cat'`)
                            .setFooter({text: 'Luarn', iconURL: `${client.user.displayAvatarURL()}`})
                            .setColor('RANDOM')
                            .setTimestamp();
                            const row3 = new Discord.MessageActionRow()
                            .addComponents(
                              new Discord.MessageButton()
                                .setCustomId('primaryyyyyy')
                                .setLabel('Script')
                                .setStyle('SECONDARY'),
                            );
                            const Input2 = new TextInputComponent()
                            .setCustomId('function')
                            .setLabel("Write a function with the name of 'cat'!")

                            .setStyle('PARAGRAPH');
                            const firstActionRow2 = new Discord.MessageActionRow().addComponents(Input2);
                            let yy2 = await t.editReply({ embeds: [embed4], components: [row3] });
                            const collector222 = yy2.channel.createMessageComponentCollector({
                              filter,
                              time: 60000, 
                            })
                            collector222.on('collect', async (i) => {
                              if(i.customId === 'primaryyyyyy') {
                                const modall = new Modal()  
                                .setTitle('Input the function here')
                                .setCustomId('function');
                                modall.addComponents(firstActionRow2);
                                await i.showModal(modall);
    
                            
                               let tt = await i.awaitModalSubmit({ filter, time: 30_000 })
                               if(tt) {
                                if(tt.fields.getTextInputValue('function') == 'function cat()'){
                                  let embed4 = new MessageEmbed()
                                  .setTitle(`LuaU Tutorial`)
                                  .setDescription('That was correct, good job! Now, let\'s start learning how to implement this into Roblox Studio. To start, open up Roblox Studio and create a new script. The first thing we are going to cover is "script". This is an Instance that is in refrence to the script you are editing. Below are some properties and methods you can use on "script".')
                                  .addField('Properties & Events', '`Name (Property)` - The name of the script\n`Parent (Property)` - The parent of the script\n`ClassName (Property)` - The class name of the script\n`Archivable (Property)` - If the script is archivable\n`Disabled (Property)` - If the script is disabled\n`Enabled (Property)` - If the script is enabled\n\n`Changed (Event)` - If the script gets changed in any way\n`ChildAdded (Event)` - If a child gets added to the script\n`ChildRemoved (Event)` - If a child gets removed from the script\n`DescendantAdded (Event)` - If a descendant gets added to the script\n`DescendantRemoving (Event)` - If a descendant gets removed from the script\n`Destroying (Event)` - When the instance gets destroyed\n`AncestryChanged (Event)` - If the script\'s ancestry gets changed\n`AttributeChanged (Event)` - If the script\'s attribute gets changed')
                                  
                                  .setFooter({text: 'Luarn', iconURL: `${client.user.displayAvatarURL()}`})
                                  .setColor('RANDOM')
                                  .setTimestamp();
                                  await tt.reply({
                                    embeds: [embed4],
                                    fetchReply: true
                                    })
                                    
                                }
                              }
                              }})

                          } else {
                            await t.reply({
                              content: `ur wrong`
                            })
                          }
                          
                        }
                          
                           
                       
                          }
                        })


                    }
                })
      
    },
};
