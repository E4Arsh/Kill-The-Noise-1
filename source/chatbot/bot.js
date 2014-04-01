exports.bot = function(b){
var bot = ''
if(typeof b != "undefined")  bot = b
else  bot = {};


var botStuff = {
	
settings: require('./settings.js');

name: bot.settings.name,

jokes: bot.settings.jokes,

motdOn: bot.settings.motdOn,

spamphase: bot.settings.spamphase,

getRandjoke: function(){
var fs = require('fs');
var data = fs.readFileSync('./source/chatbot/jokes.txt','utf8'); 
var line = data.split('\n');
var joke = String(line[Math.floor(Math.random()*line.length)]);
if(joke.length<1){
joke = line[0];
}
return joke;
},

spamcheck: require('./spamsystem.js').canTalk,

say: function(name,message,r,reply){
  return r.add('|c|' + name + '|' + message);
},

commandchar: bot.settings.commandchar,

Int: undefined,

spammers: new Array('gavigator','professorgavin','suk','ilikewangs','nharmoniag','gavgar','gym leader dukeeee','soles','soles shadow'),
cmds: {
  update: function(target, room, user){
  	try {
				CommandParser.uncacheTree('./source/chatbot/bot.js');
				bot = require('./bot.js').bot(bot);
				CommandParser.uncacheTree('./source/chatbot/spamsystem.js');
				bot.spamcheck = require('./spamsystem.js').canTalk;
				return this.sendReply('Chatbot has been updated.');
  	} catch (e) {
				return this.sendReply('Something failed while trying to update the bot: \n' + e.stack);
			}


  },
  credits: function(target, room, user, message) {
 	if(this.can('broadcast')) {
 		bot.say(user.getIdentity(),'?credits',room);
 		return this.add('|html|<h1 style= font-family: "Impact" font-color: "blue" face="stencil"><em>ChatBot by Bandi</em></h1><hr><marquee bgcolor="#A9F5F2" direction="up" scrolldelay="110" > The creator of this bot is <b>bandi</b>, however <b>iFaZe and Aananth</b> have contributed so I\'d like to thank them as well. If you would like to use this for your server, please PM him. He is always on the <a href="http://nova.psim.us">Nova Server</a>. Some of these ideas were used from <b>Quinellas chat bot</b>. <a href="http://creativecommons.org/licenses/by/3.0/us/">Attribution License</a>. If you have any suggestions please tell him. Enjoy!');
 	}
 	else {
 	return false;	
 	}
 },
/*ask: function(target, user, room) {
 if(!this.canBroadcast()) return;
 var unanswerable = ['god']; //if anymore unanswered questions just add them
 if(!target){
 return this.sendReply('What would you like to know?')	
 } 
 if((bot.spamwords.indexOf(target)) && (unanswerable.indexOf(target)) > -1){
 return this.sendReply('That question is unanswerable.');	
 } 
 else if(target === 'whois bandi') {
 	bot.say(bot.name,'My creator please do not disrepsect him.',room);
 }
 else{
 var r = 'That is not a question.'; 
 var yn = ['yes','no'];
 if(target.indexOf('how')){
 r = 'magik';
 }
 if(target.indexOf('where')) {
 r = 'places';	
 }
 if(target.indexOf('what')) {
 r = 'stuff';
 }
 if(target.indexOf('who')) {
 r = 'a person';	
 }
 if(target.indexOf('when')) {
 r = 'who knows';
 }
 if(target.indexOf('why')) {
 r = 'reasons';
 }
 if(target.indexOf('do')) {
 r = yn[Math.floor(Math.random()*2)];
 }
 bot.say(bot.name,r,room,this.sendReply)
 }
 },
 */
 lol: function(target, room, user) {
 	if(!target){ 
 	this.sendReply('What user would you like to say this.'); return false;
 	}
 	else{
 	if(this.can('broadcast')){
 	bot.say(target,'lol',room);
	this.logModCommand(user.name + ' used ?lol on ' + target + '.');
 	}
 	else {
 	return false;
 	}
 	}
 },
 merp: function(target, room, user) {
 	if(!target){ 
 	this.sendReply('What user would you like to say this.'); return false;
 	}
 	else{
 	if(this.can('broadcast')){
 	bot.say(target,'/me merps',room);
	this.logModCommand(user.name + ' used ?merp on ' + target + '.');
 	}
 	else {
 	return false;
 	}
 	}
 },
 
  o3o: function(target, room, user) {
 	if(!target){ 
 	this.sendReply('What user would you like to say this.'); return false;
 	}
 	else{
 	if(this.can('broadcast')){
 	bot.say(target,'o3o',room);
	this.logModCommand(user.name + ' used ?o3o on ' + target + '.');
 	}
 	else {
 	return false;
 	}
 	}
 },
 
  derp: function(target, room, user) {
 	if(!target){ 
 	this.sendReply('What user would you like to say this.'); return false;
 	}
 	else{
 	if(this.can('broadcast')){
 	bot.say(target,'/me derps in a pool :P',room);
	this.logModCommand(user.name + ' used ?derp on ' + target + '.');
 	}
 	else {
 	return false;
 	}
 	}
 },
  motd: function(target, room, user) {
    if(this.can('mute')) {
      if(!target){
      	if(bot.MOTD.length > 0) {
      	return bot.say(bot.name,bot.MOTD,room);	
      	}
      }
      else {
        return bot.say(bot.name,'The new Message Of the Day is: ' +target,room);	
        bot.MOTD = target;
		bot.MOTDon = true;
		bot.Int = setInterval(function(){return bot.say(bot.name, bot.MOTD, room);},300000);
      }
    }
    else { 
      return false;
    }
  },
  
  motdoff: function(target, room, user) {
    if(this.can('mute')) {
	if(bot.Int){
      return this.add('The MOTD function is now off');
      bot.MOTD = undefined;
	  clearInterval(bot.Int);
	  }
	  else {
	  return this.sendReply('There is no MOTD on.');
	  }
  }
  else {
  return false;
  }
},


say: function(target, room, user){
  if(this.can('broadcast')) {
  if(!target) return this.sendReply('Please specify a message.');  
    this.logModCommand(user.name + ' used '+bot.commandchar+'say to say ' + target + '.');
    return bot.say(bot.name, target, room)

  } else {
    return false;
  }
},
joke: function(target, room, user){
  if(this.can('broadcast')) {
  	if(!bot.jokes === true) {
  	return this.sendReply('Jokes are currenlty off');	
  	}
  	else {
    bot.say(user.getIdentity(),'?joke',room);
    return bot.say(bot.name,bot.getRandjoke(),room);
  	}
  } 
  else {
  	return false;
  }
  }
}
/*setInterval for catchphrases here soon*/
};
Object.merge(bot, botStuff);
return bot;
};
