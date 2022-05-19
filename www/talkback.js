var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'Talkback', 'coolMethod', [arg0]);
};
exports.login = function (arg0, arg1, arg2, arg3, success, error) {
    exec(success, error, 'Talkback', 'login', [arg0, arg1, arg2, arg3]);
};
exports.enterChannel = function (arg0, success, error) {
    exec(success, error, 'Talkback', 'enterChannel', [arg0]);
};
exports.joinChannel = function (arg0, arg1, arg2, success, error) {
    exec(success, error, 'Talkback', 'joinChannel', [arg0, arg1, arg2]);
};
exports.quitChannel = function (arg0, success, error) {
    exec(success, error, 'Talkback', 'quitChannel', [arg0]);
};
exports.channelList = function (arg0, success, error) {
    exec(success, error, 'Talkback', 'channelList', [arg0]);
};