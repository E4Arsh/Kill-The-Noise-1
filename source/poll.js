var poll = {
question: undefined,
answers: [],
answerlist: [],
tourPoll: function(){}
};
var cmds = {
	survey: 'poll',
	poll: function(target, room, user) {
		if (!this.can('broadcast')) return this.sendReply('You do not have enough authority to use this command.');
		if (poll[room.id].question) return this.sendReply('There is currently a poll going on already.');
		var separacion = "&nbsp;&nbsp;";
		var answers = target.split(',');
		if (answers.length < 3) return this.sendReply('Correct syntax for this command is /poll question, option, option...');
		var question = answers[0];
		answers.splice(0, 1);
		var answers = answers.join(',').toLowerCase().split(',');
		poll[room.id].question = question;
		poll[room.id].answerList = answers;
		room.addRaw('<div class="infobox"><h2>' + poll[room.id].question + separacion + '<font class="closebutton" size=1><small>/vote OPTION<br /><i><font size=1>Poll started by '+user.name+'</font size></i></small></font></h2><hr />' + separacion + separacion + " &bull; " + poll[room.id].answerList.join(' &bull; ') + '</div>');
	},

	vote: function(target, room, user) {
		var ips = JSON.stringify(user.ips);
		if (!poll[room.id].question) return this.sendReply('There is no poll currently going on in this room.');
		if (poll[room.id].answerList.indexOf(target.toLowerCase()) == -1) return this.sendReply('\'' + target + '\' is not an option for the current poll.');
		poll[room.id].answers[ips] = target.toLowerCase();
		return this.sendReply('You are now voting for ' + target + '.');
	},

	votes: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReply('NUMBER OF VOTES: ' + Object.keys(poll[room.id].answers).length);
	},

	endsurvey: 'endpoll',
	ep: 'endpoll',
	endpoll: function(target, room, user) {
		if (!this.can('broadcast')) return this.sendReply('You do not have enough authority to use this command.');
		if (!poll[room.id].question) return this.sendReply('There is no poll to end in this room.');
		var votes = Object.keyspoll[room.id].answers).length;
		if (votes == 0) room.addRaw("<h3>The poll was canceled because of lack of voters.</h3>");
		var options = new Object();
		var obj = poll[room.id];
		for (var i in obj.answerList) options[obj.answerList[i]] = 0;
		for (var i in obj.answers) options[obj.answers[i]]++;
		var sortable = new Array();
		for (var i in options) sortable.push([i, options[i]]);
		sortable.sort(function(a, b) {return a[1] - b[1]});
		var html = "";
		for (var i = sortable.length - 1; i > -1; i--) {
			console.log(i);
			var option = sortable[i][0];
			var value = sortable[i][1];
			html += "&bull; " + option + " - " + Math.floor(value / votes * 100) + "% (" + value + ")<br />";
		}
		room.addRaw('<div class="infobox"><h2>Results to "' + obj.question + '"<br /><i><font size=1 color = "#939393">Poll ended by '+user.name+'</font></i></h2><hr />' + html + '</div>');
		poll[room.id].question = undefined;
		poll[room.id].answerList = new Array();
		poll[room.id].answers = new Object();
	},

	pollremind: 'pr',
	pr: function(target, room, user) {
		var separacion = "&nbsp;&nbsp;";
		if (!poll[room.id].question) return this.sendReply('There is currently no poll going on.');
		if (!this.canBroadcast()) return;
		this.sendReply('|raw|<div class="infobox"><h2>' + poll[room.id].question + separacion + '<font class="closebutton" size=1><small>/vote OPTION</small></font></h2><hr />' + separacion + separacion + " &bull; " + poll[room.id].answerList.join(' &bull; ') + '</div>');
	}
}
