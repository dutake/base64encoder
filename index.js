const {Plugin} = require('powercord/entities');
module.exports = class base64encoder extends Plugin {
	startPlugin() {
		powercord.api.commands.registerCommand({
			command: 'encode',
			description: 'It encodes a string from normal text to base 64',
			usage: '{c} <message>',
			executor: async (message) => {
				return {
					send: true,
					result: btoa(message.join(' '))
				};
			}
		});
		powercord.api.commands.registerCommand({
			command: 'decode',
			description: 'It decodes a string from base 64 to normal text',
			usage: '{c} <message>',
			executor: async (message) => {
				return {
					send: true,
					result: atob(message.join(' '))
				};
			}
		});
	}
	pluginWillUnload() {
		powercord.api.commands.unregisterCommand('encode');
		powercord.api.commands.unregisterCommand('decode');
	}
};
