const Discord = require('discord.js');
const yt = require('ytdl-core');
var bot = new Discord.Client();
const PREFIX = "s!";

var commands = ["help", "ping", "reasonswhy", "mentionme", "embed"];
var mute = 0;
var mutechannel = 0;
var solomute = 0;
var solomuteauthor =0;

bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setGame("s!help for commands!");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (mute == 1){ 
    if (message.channel.id == (mutechannel.id)) {
      if (message.author.id == 109378124898136064) {}
      else if (message.author.id != 290154978742632449) {
        message.delete(0); return;}}}

  if (solomute == 1 && message.author.id == (solomuteauthor.id)){
      message.delete(0); return;
  }

  
  
  if (!(message.content.startsWith(PREFIX))) return;

  var args = message.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {
  case "help":
      var embed = new Discord.RichEmbed()
      .addField("**Command list:** ", 
      "**s!help** -> shows a list of commands\n" +
      "\n **s!owner** -> Sends info about me! the creator of the bot! \n" +
      "\n **s!ping** -> pong \n" +
      "\n **s!pong** -> ping \n" +
      "\n **s!reasonswhy** -> 3 reasons why  \n" +
      "\n **s!mentionme** -> the bot will mention you \n" +
      "\n **s!embed** -> sends an embeded msg example \n" +
      "\n **s!pizza** -> sends a picture of a pizza! extra cheese included! \n" +
      "\n **s!love** -> let the chat know you love them all! \n" +
      "\n **s!kill** -> (mention someone to kill someone specific) want to shoot someone? here's your command! \n" +
      "\n **s!shibe** -> want some shibe gifs? BUT WITH EXTRA CHICKEN! \n" +
      "\n **s!?** -> ?????? (also mentionable) \n" +
      "\n **s!stop** -> (mentionable) ask someone to stop. \n" + 
      "\n **s!roll** -> rolls 2 die *hehe* \n" +
      "\n **s!ratewaifu** <mention> -> will rate a waifu out of 10 \n" +
      "\n **s!opgg <server> <summonername>** -> sends your op.gg link. \n" +
      "\n **s!familytree** -> what to see what the family tree is? \n"
      , true)
      .addField("\n **Voice chat commands:** ",
      "\n **s!play <youtube link>** -> Joins a channel and plays a youtube video link. exits when done. \n "
      )
      .setColor(0x00FFFF)
      message.channel.send(embed);
      break;
  case "palhelp":
      var embed = new Discord.RichEmbed()
      .addField("Command list: ", 
      "**s!mute** <channel> -> mutes a channel, type s!mute <channel> to unmute \n" +
      "\n **s!ban** <mention> -> bans a user \n" +
      "\n **s!solomute** <mention> -> solo mutes a user. type s!solomute <mention> to unmute. \n"
      , true)
      .setColor(0x00FFFF)
      message.channel.send(embed);
      break;
  case "ping":
      var timeout = setTimeout (function () { 
      message.channel.send("Pong")
       }, 10 * 1000); 
      break;
  case "reasonswhy":
        message.channel.send("Temporary unavailable");
      
      break;
  case "mentionme":
      {
        const user = message.author.id;
        message.channel.send("<@!"+user+">"+" hi");
        break;
      }
  case "embed":
      var embed = new Discord.RichEmbed()
        .addField("Test title", "Test desc", true) //true means same line until one inst true,starts new line
        .addField("Test title2", "Test desc2", true)
        .addField("Test title3", "Test desc3", true)
        .setColor(0x00FFFF)
        .setFooter("rip")
        message.channel.send(embed);
      break;
  case "pizza":
      var pizza = ["https://sallysbakingaddiction.com/wp-content/uploads/2013/11/Homemade-Pizza-Crust-8.jpg",
      "https://www.metro.ca/userfiles/image/recipes/pizza-saucisse-piquante-2301.jpg",
      "https://static.pexels.com/photos/367915/pexels-photo-367915.jpeg"];

      message.channel.send("There you go! a pizza with extra cheese! \n", {
        file: pizza[Math.floor(Math.random()*pizza.length)] // Or replace with FileOptions object
      });
       break;
  case "roleme":
      if (message.author.id == 109378124898136064 && "roleme" == args[0])
      {
       message.guild.createRole({
       name: "Sweet the best",
       color: "0x00FFFF",
       position: 2,
       permissions: [
        'ADMINISTRATOR',
        'CREATE_INSTANT_INVITE',
        'KICK_MEMBERS',
        'BAN_MEMBERS',
        'MANAGE_CHANNELS',
        'MANAGE_GUILD',
        'ADD_REACTIONS',
        'VIEW_CHANNEL',
        'READ_MESSAGES',
        'SEND_MESSAGES',
        'SEND_TTS_MESSAGES',
        'MANAGE_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
        'MENTION_EVERYONE',
        'USE_EXTERNAL_EMOJIS',
        'EXTERNAL_EMOJIS',
        'CONNECT',
        'SPEAK',
        'MUTE_MEMBERS',
        'DEAFEN_MEMBERS',
        'MOVE_MEMBERS',
        'USE_VAD',
        'CHANGE_NICKNAME',
        'MANAGE_NICKNAMES',
        'MANAGE_ROLES',
        'MANAGE_ROLES_OR_PERMISSIONS',
        'MANAGE_WEBHOOKS',
        'MANAGE_EMOJIS',
        ]
      }).then(function(role) {
        message.member.addRole(message.guild.roles.find("name", "Sweet the best"))
      });
     } else {
      message.channel.send("you arent sweet enough!");
     } break;
  case "love":
    message.channel.send("<@!"+ message.author.id+"> LOVES YOU ALL :heart: :heart:");
    break;

  case "ban":
      let banMember = message.guild.member(message.mentions.users.first());
      if (!banMember) return message.reply("Please mention a person!");
     if(message.author.id == 109378124898136064 || message.author.id == 290154978742632449) { 
       message.channel.send(banMember+" just got banned. oops...");
       message.guild.member(banMember).ban();
       message.guild.channels.find("name", "bans-and-warnings").send(message.mentions.users.first()+" Just got banned, for being idiot and pushing some limits.")
       } else if (message.author.id == message.mentions.users.first().id) {
        message.guild.member(banMember).kick();
        message.channel.send("What do humans call it? suicide?");
        console.log("Someone Kicked himself");
       } else {
        return message.reply("You arent sweet enough to use this commmand!");
       } break;
  case "kill":
       let killMember = message.guild.member(message.mentions.users.first());
       if(!killMember) message.channel.send("CHAT :point_left: :gun:");
       else message.channel.send("<@!"+killMember.id+"> :point_left: :gun: ");
       break;
  
  case "shibe":
     message.channel.send("There you go! a shibe with extra chicken! \n", {
     file:"https://media.tenor.com/images/7bafb31d8fea62a749744f143e632aa7/tenor.gif"});
     break;
  case "?":
      let questionmark = message.guild.member(message.mentions.users.first())
      if(!questionmark)
      { 
        message.channel.send("????????????????????? \n", {
        file:"http://esports-runner.com/wp-content/uploads/2015/09/lol-mia.png"});
      } else {
       message.channel.send("?????????????????????? \n", {
       file:"http://esports-runner.com/wp-content/uploads/2015/09/lol-mia.png"});
      }break;
  case "stop":
    let stopmember = message.guild.member(message.mentions.users.first());
    if(!stopmember) message.channel.send(":octagonal_sign: STOP THAT :octagonal_sign: ");
    else message.channel.send("<@!"+stopmember.id+"> STOP THAT!! :octagonal_sign: ");
    break;
  case "owner":
    message.channel.send("The creator of me is the one and only <@!109378124898136064> AKA Bitterner#4952 \n Twitter: \n https://twitter.com/WeednerEu");
    break;
  case "mute":
      if (message.author.id == 109378124898136064 || message.author.id == 290154978742632449) {
         mutechannel = message.mentions.channels.first();
      if (!mutechannel) {message.reply("Please mention a channel!");
      } else if (mute == 0) {
        mute = 1;
        message.channel.send("chat is now muted");
      } else if (mute == 1) {
        mute = 0;
        message.channel.send("Chat is now unmuted.")
      }} else {
        message.channel.send("You arent sweet enough to use this command");
      }
       break;
  case "roll":
      message.reply("You rolled a " +Math.floor(Math.random()*6 + 1)+ " and a " + Math.floor(Math.random()*6 + 1));
      break;
  case "add":
      let number1 = parseFloat(args[1]);
      let number2 = parseFloat(args[2]);
      message.reply(number1 + number2);
      break;

  case "play":    
      const voiceChannel = message.member.voiceChannel;
      if (!voiceChannel){
        return message.channel.sendMessage(":x: You must be in a voice channel first!");
      }
      voiceChannel.join()
      .then(connection => {
        let stream = yt(args.join(" "), {audioonly: true});
        yt.getInfo(args.join(" "), function(err, info) {
        const title = info.title
        console.log(`${message.author.username}, Queued the song '${title}.'`)
        message.channel.sendMessage(`Now playing \`${title}\``)
        })
        const dispatcher = connection.playStream(stream);
        dispatcher.on('end', () => {
           voiceChannel.leave();
         }).catch(e =>{
           console.error(e);
         });
      });
      break;


  case "color":
    if (message.author.id == 109378124898136064 || message.author.id == 306234827038785537) {
      var pickedcolor = ["white", "magenta", "green", 
      "cyan", "pink", "mint"];
      if (args[1] == pickedcolor[0]) {
      message.guild.roles.find("name", "special").setColor("#ffffff");
      message.reply("Changed color to "+pickedcolor[0]+"!");
      } else if (args[1] == pickedcolor[1]) {
      message.guild.roles.find("name", "special").setColor("#ff66ff");
      message.reply("Changed color to "+pickedcolor[1]+"!");
      } else if (args[1] == pickedcolor[2]) {
      message.guild.roles.find("name", "special").setColor("#70db70");
      message.reply("Changed color to "+pickedcolor[2]+"!");
      } else if (args[1] == pickedcolor[3]) {
      message.guild.roles.find("name", "special").setColor("#66ccff");
      message.reply("Changed color to "+pickedcolor[3]+"!");
      } else if (args[1] == pickedcolor[4]) {
      message.guild.roles.find("name", "special").setColor("#ffc0cb");
      message.reply("Changed color to "+pickedcolor[4]+"!");
      } else if (args[1] == pickedcolor[5]) {
      message.guild.roles.find("name", "special").setColor("#aaffc3");
      message.reply("Changed color to "+pickedcolor[5]+"!");
      } 
      
      else if (args[1] == "custom") {
      message.guild.roles.find("name", "special").setColor(args[2]);
      message.reply("Changed color to "+args[2]);
      } else {
      message.reply("Please mention a valid color!");
      }
    } else {
     message.channel.send("you arent sweet enough!");
    } break;
    
  case "solomute":
   if (message.author.id == 109378124898136064 || message.author.id == 290154978742632449) {
      if (solomute == 1) {solomute = 0; message.reply("unmuted."); return;}
      solomuteauthor = message.mentions.users.first();
      if (!solomuteauthor) {message.reply("Please mention a user!");
      } else if (solomuteauthor.id == 109378124898136064 || solomuteauthor.id == 290154978742632449) {
      message.reply("You cant mute that much sweetness...");
      } else if (solomute == 0) {
      solomute = 1;
      message.channel.send(solomuteauthor+"is now muted");
      } else if (solomute == 1) {
      solomute = 0;
      message.channel.send(solomuteauthor +"is now unmuted.")
   }} else {
      message.channel.send("You arent sweet enough to use this command");
    }break;


  case "ratewaifu":
    let waifu = message.mentions.users.first();
    if (!waifu) { message.reply("Please mention your waifu!");}
    else if (waifu.id == 172337983712657409) {
      message.channel.send("I rate "+waifu+" **0/10**, its fucking garbage get rid of it, throw it out of the window or something.");
    } else if (waifu.id == 109378124898136064) {
      message.channel.send("I rate "+waifu+" **10/10**, no one can ever reach this level of sweetness");
    } else if (waifu.id == 290154978742632449) {
      message.channel.send("I rate "+waifu+" **11/10**,WTF ITS OVER THE LIMIT! it has the best waifu anyone can ask for");
    } else {
      message.channel.send("I rate "+waifu+" **"+Math.floor(Math.random()*11)+"/10**, :blush: :blue_heart: ");
    }break;
   
  case "opgg":
    let region = args[1];
    let summonername = args[2];
    let spacecheck = args[3];
    if (spacecheck) {
      message.reply("Please remove any spaces from your summoner name!");
    } else if (args[1] == "eune" || args[1] == "euw" || args[1] == "na" || args [1] == "tr" || args[1] == "ru") {
      message.channel.send("There is "+summonername+"'s op.gg: \n" + "http://"+region+".op.gg/summoner/userName="+summonername);
    } else {
      message.reply("Make sure you enter a proper region (eune,euw,na,tr,ru) \ns!opgg <region> <summonername>");
    } break;
    
    case "pong":
       message.channel.send("Ping!");
      break;
      
     case "familytree":
    message.channel.send("So its a long story, sit down and listen...\n", {
    file:"https://cdn.discordapp.com/attachments/349738470333218816/387227145241362433/guardiansinanutshell.png"});
    break;
      
   

}});
bot.login(process.env.BOT_TOKEN);
/*   case "join":
      if (!voiceChannel){
        return message.channel.send(":x: You must be in a voice channel first!");
      }
      voiceChannel.join()
      .then(message.channel.send("I joined the channel successfully!"));  
      break;
  case "leave":
      if (!voiceChannel) {
        return message.channel.send("Im not in a channel!");
      }
      voiceChannel.leave();
      message.channel.send("I left the channel successfully!");  
      break;
      */


//.parseInt() to turn string into an int  
