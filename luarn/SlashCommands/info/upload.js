const { Client, CommandInteraction } = require("discord.js");
const main = require('../../commands/info/schemas/main')
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name: "upload",
    description: "uploads a script!",
    type: 'CHAT_INPUT',
   
   
    run: async (client, interaction, args) => {
      
      //let y = await interaction.channel.send('Please type the script you want to upload in the chat! (You have 30 seconds to do so!)')
      interaction.reply('Please type the script you want to upload in the chat! (You have 30 seconds to do so!)')
        const filter = (i) => i.user.id === interaction.user.id
        const collector = interaction.channel.createMessageCollector(filter, {max: 1, time: 30000});
    let sent;
        collector.on('collect', async m => {
            if(m.author.id !== interaction.user.id) {
             return;
            }
            if(m.content == ''){
                return;
            }
            
                let em = new MessageEmbed()
                .setTitle('Upload')
                .setDescription('Are you sure you want to upload this script?')
                .addField('Script', '```lua\n' + m.content + '```')
                .setFooter({ text: 'React with 🟩 to upload the script or 🟥 to cancel the upload!' })
                .setColor('GREEN')
                .setTimestamp();



                const row = new Discord.MessageActionRow()
                .addComponents(
                  new Discord.MessageButton()
                    .setCustomId('primary')
                    .setLabel('Upload')
                   //.setEmoji('✅')
                    .setStyle('SUCCESS'),
        
                    new Discord.MessageButton()
                    .setCustomId('primary2')
                    .setLabel('Cancel')
                    //.setEmoji('❌')
                    .setStyle('DANGER'),
                );
                let msg = await interaction.channel.send({ embeds: [em], components: [row] });
                const collector2 = msg.channel.createMessageComponentCollector({
                    filter, 
                    time: 30000,
                    max: 1
                  })
                  const embed2 = new Discord.MessageEmbed()
                  .setDescription(`Upload cancelled!`)
                  .setColor('RED')
           
           
                  collector2.on('collect', async (i) => { //collecter
                    if(i.customId === 'primary2') {
                      return await msg.edit({embeds: [embed2], components: []})
                    } else if(i.customId === 'primary'){
                        let code = m.content
                        let guild = interaction.guild.id
                        let user = i.user.id
                        let userr = i.user
                        let data = new main({
                            Guild: guild,
                            User: user,
                       //     Code: code
                        }).save()
                        let embed = new MessageEmbed()
                        .setTitle('Upload Successful!')
                        .setDescription('Your script has been sent for reviewing! You will recieve a DM if your script becomes accessible to the catalog.')
                        .setColor('GREEN')
                        .setTimestamp();
                        sent = await interaction.channel.send({embeds: [embed], components: []})
                          msg.delete()
                          collector.stop()

                          if(sent){
                            let embed22 = new MessageEmbed()
                            .setTitle('New Upload Request!')
                            .setDescription(`\`\`\`${m.content}\`\`\``)
                            .addField(`User`, `${interaction.user.tag}`)
                            .addField(`Guild`, `${interaction.guild.name}`)
                            .setColor('GREEN')
                            .setTimestamp();
  
                            const row3 = new Discord.MessageActionRow()
                            .addComponents(
                              new Discord.MessageButton()
                                .setCustomId('primary11')
                                .setLabel('Allow')
                               //.setEmoji('✅')
                                .setStyle('SUCCESS'),
                    
                                new Discord.MessageButton()
                                .setCustomId('primary22')
                                .setLabel('Deny')
                                //.setEmoji('❌')
                                .setStyle('DANGER'),
                            );
                           let dm = await client.channels.cache.get('955180240513138728').send({embeds: [embed22], components: [row3]})
                            const collector2w = await dm.channel.createMessageComponentCollector({
                              filter, 
                              time: 60000, 
                            })
                            collector2w.on('collect', async (ii) => { //collecter
                              console.log(ii.customId)
                              if(ii.customId === 'primary22') {
                                await client.users.cache.get(`${user}`).send(`Your script upload has been **denied.**`)
                                await  dm.edit({embeds: [embed22], components: []})
                              } else if(ii.customId === 'primary11'){
                                await interaction.channel.send('ttteeesssttt')
                                //client.users.cache.get(`${user}`).send(`Your script upload has been **accepted!**`)
                                await userr.send(`Your script upload has been **accepted!**`)
                                
  
                               await main.findOneAndUpdate({Guild: interaction.guild.id, User: user, Code: code})
                               await  dm.edit({embeds: [embed22], components: []})
  
                              }
                            })
  
                      
                          
                          
                          }


                        }
                      })
                      
                      }
                  )

                      



                  collector.on('end', (m, reason) => {
                    if(reason == 'time'){
                      interaction.channel.send({
                        content: 'You ran out of time to upload a script!'
                     })
                    }
                   
                })



                
            }
        

          }

      





           
        
            
    

    

