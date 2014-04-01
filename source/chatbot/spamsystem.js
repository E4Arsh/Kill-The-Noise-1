var spamphase = bot.spamphase;
exports.canTalk = function (user, room, connection, message) {
	if(spamphase === 0) {
		return true;
	}
	else if(spamphase === 1) {
    var filter = ['meat spin', 'meatspin','pornhub','porn hub','4chan.org','xxx.com','420yolo','spamspam','cum','cumshot','nigger','snen snen','cock','c0ck','anal'];
	for (var i=0;i<filter.length;i++) {
    if (message.indexOf(filter[i]) > -1) {
        user.lock();
        room.add('|html|<font color="#FF00BF"><i><b>' + bot.name + '</b> locked ' + user.name + '(somthing bad :P).</i></font>');
        return false;
    }
}
	global.today = new Date();
	  user.numMessages += 1;
	if ((today.getMinutes() - user.o3omessagetime) < 0) {
        user.o3omessagetime = today.getMinutes();
    }
    if ((today.getMinutes() - user.o3omessagetime) > 1 || (today.getMinutes() - user.o3omessagetime) === 1) {
        user.o3omessagetime = today.getMinutes();
        user.numMessages = 0;
    }
    if (user.numMessages == 15) {
        user.mute(room.id, 7 * 60 * 1000);
        room.add('|html|<font color="#FF00BF"><i><b>' + bot.name + '</b> has muted ' + user.name + ' for 7 minutes(flood).</i></font>');
        user.o3omessagetime = today.getMinutes();
        user.numMessages = 0;
        return false;
    }
    if (bot.spammers.indexOf(user.userid) > -1) {
        spamroom[user.userid] = true;
        return false;
    }
  
  //caps
			var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			for (var i=0;i<alpha.length;i++) {
				if(message.indexOf(alpha[i]) >= 0) {
					if (message === message.toUpperCase() && message.toUpperCase >= 6) {
						room.add('|c|'+ user.name+'|'+message);
						user.warnCounter+
						room.add('|html|<font color="#FF00BF">'+user.name+' was warned by '+'<i><b> Rain Bot </b> '+'.' +  ' (caps)</i></font>');
						user.send('|c|~|/warn '+'caps');
						return false;
					}
				}
			}
			
    if (user.warnCounters > 4) {
        room.add('|html|<font color="#FF00BF">' + user.name + ' was muted by ' + '<i><b>' + bot.name + '</b>(more than 4 warnings)</i></font>');
        user.mute(room.id, 60 * 60 * 1000, true);
        return false;
    }
    if (spamroom[user.userid]) {
        Rooms.rooms.spamroom.add('|c|' + user.getIdentity() + '|' + message);
        connection.sendTo(room, "|c|" + user.getIdentity() + "|" + message);
        return false;
    }
    if (message.toLowerCase().indexOf(".psim") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
        user.warnCounters += 1;
    }

    if (message.toLowerCase().indexOf("play.pokemonshowdown.com") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
    }

    if (message.toLowerCase().indexOf("psim") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
    }
    if (message.toLowerCase().indexOf("ps im") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
    }
    if (message.toLowerCase().indexOf("psi m") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
    }
    if (message.toLowerCase().indexOf("p sim") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
    }
    if (message.toLowerCase().indexOf(".prism") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
    }
	} 
	else if(spamphase == 2) {
			global.today = new Date();
	  user.numMessages += 1;
	if ((today.getMinutes() - user.o3omessagetime) < 0) {
        user.o3omessagetime = today.getMinutes();
    }
    if ((today.getMinutes() - user.o3omessagetime) > 1 || (today.getMinutes() - user.o3omessagetime) === 1) {
        user.o3omessagetime = today.getMinutes();
        user.numMessages = 0;
    }
	if (message.toLowerCase().indexOf("psim") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
        user.warnCounters += 1;
        room.add('|html|<font color="#FF00BF">' + user.name + ' was warned by ' + '<i><b>' + bot.name + '</b>(advertising)</i></font>');
        user.send('|c|~|/warn advertising');
    }
    if (message.toLowerCase().indexOf("ps im") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
        user.warnCounters += 1;
        room.add('|html|<font color="#FF00BF">' + user.name + ' was warned by ' + '<i><b>' + bot.name + '</b>(advertising)</i></font>');
        user.send('|c|~|/warn advertising');
    }
    if (message.toLowerCase().indexOf("psi m") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
        user.warnCounters += 1;
        room.add('|html|<font color="#FF00BF">' + user.name + ' was warned by ' + '<i><b>' + bot.name + '</b>(advertising)</i></font>');
        user.send('|c|~|/warn advertising');
    }
    if (message.toLowerCase().indexOf("p sim") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
    }
    if (message.toLowerCase().indexOf(".prism") > -1) {
        connection.sendTo(room, '|raw|<strong class=\"message-throttle-notice\">Advertising is not allowed please do not.</strong>');
        return false;
        user.warnCounters += 1;
        room.add('|html|<font color="#FF00BF">' + user.name + ' was warned by ' + '<i><b>' + bot.name + '</b>(caps)</i></font>');
        user.send('|c|~|/warn caps');
    }	
    if (user.numMessages == 10) {
        user.mute(room.id, 7 * 60 * 1000);
        room.add('|html|<font color="#FF00BF"><i><b>' + bot.name + '</b> has muted ' + user.name + ' for 7 minutes(flood).</i></font>');
        user.o3omessagetime = today.getMinutes();
        user.numMessages = 0;
        return false;
    }
    if (bot.spammers.indexOf(user.userid) > -1) {
        spamroom[user.userid] = true;
        return false;
    }
    	if (user.warnCounters > 3) {
        room.add('|html|<font color="#FF00BF">' + user.name + ' was muted by ' + '<i><b>' + bot.name + '</b>(more than 4 warnings)</i></font>');
        user.mute(room.id, 60 * 60 * 1000, true);
        return false;
    }
    var filter = ['meat spin', 'meatspin','pornhub','porn hub','4chan.org','xxx.com','420yolo','fag','fgt','feg','spamspam','cum','cumshot','nigger','snen snen','cock','c0ck','anal'];
	for (var i=0;i<filter.length;i++) {
    if (message.indexOf(filter[i]) > -1) {
        user.lock();
        room.add('|html|<font color="#FF00BF"><i><b>' + bot.name + '</b> locked ' + user.name + '(somthing bad :P).</i></font>');
        return false;
    }
}
	}

};
