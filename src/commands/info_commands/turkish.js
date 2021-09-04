const db = require("../../core/db");

// -------------
// Command Code
// -------------

module.exports = function run (guild, config)
{

   // Try system channel
   let defaultChannel = "";
   Override: if (guild.systemChannel)
   {

      if (guild.systemChannel.permissionsFor(guild.me).has("SEND_MESSAGES"))
      {

         defaultChannel = guild.systemChannel;
         break Override;

      }

   }
   // If not able to use system channel find another
   if (defaultChannel === "")
   {

      defaultChannel = guild.channels.cache.find((channel) => channel.type === "text" && channel.permissionsFor(guild.me).has("SEND_MESSAGES"));

   }
   
   
   return defaultChannel.send('Testing Turki');
};
