
var audioNotif = new Audio();
audioNotif.preload = 'auto';
audioNotif.src = 'sounds/Isnt-it.mp3';

chrome.browserAction.onClicked.addListener( function()
{
	chrome.tabs.create({ url: chrome.extension.getURL('main.html')});
});

chrome.notifications.onClicked.addListener(function (notificationId)
{
	chrome.notifications.clear( notificationId, function () { });
});


chrome.runtime.onMessage.addListener( function(response, sender, senDresponse)
{
	if(typeof response == 'string')
	{
		if(/^msg\:/g.test(response))
		{
			var options = {
			type: "basic",
			title: " Bot",
			message: response.replace(/^msg\:/, ''),
			iconUrl: 'images/icon128.png'
			};
			chrome.notifications.clear( "msg", function () { });
			chrome.notifications.create( "msg", options, function (id) { });
		}
		else if(/^soundMsg\:/g.test(response))
		{
			var options = {
			type: "Bot",
			title: " Bot",
			message: response.replace(/^soundMsg\:/, ''),
			iconUrl: 'images/icon128.png'
			};
			audioNotif.play();
			chrome.notifications.clear( "msg", function () { });
			chrome.notifications.create( "msg", options, function (id) { });
		}
	}
	else
	{
		
	}
});