const {Plugin} = require('powercord/entities');
module.exports = class base64encoder extends Plugin {
	startPlugin() {
		powercord.api.commands.registerCommand({
			command: 'encode',
			description: 'It encodes a string from normal text to base 64',
			usage: '{c} <message>',
			executor: async (message) => {
				return await this.stringtobase64(message.join(" "));
			}
		});
		powercord.api.commands.registerCommand({
			command: 'decode',
			description: 'It decodes a string from base 64 to normal text',
			usage: '{c} <message>',
			executor: async (message) => {
				return await this.base64tostring(message.join(" "));
			}
		});
	}
	pluginWillUnload() {
		powercord.api.commands.unregisterCommand('encode');
		powercord.api.commands.unregisterCommand('decode');
	}
	async stringtobase64(messagetoconvert) {
		return {
			send: true,
			result: btoa(messagetoconvert)
		};
	}
	async base64tostring(messagetoconvert) {
		return {
			send: true,
			result: atob(messagetoconvert)
		};
	}
};
