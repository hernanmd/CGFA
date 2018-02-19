function onCreated(n) {
	if (browser.runtime.lastError) {
		console.log('Error:' + browser.runtime.lastError);
	} else {
		console.log("Item created successfully");
	}
}

browser.contextMenus.create({
	id: "cg",
	title: "CGFA",
	contexts: ["selection"]
}, onCreated);

browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
	    // console.log("Hello World!");
		const url = "https://bing.com/?q="+info.selectionText;
		browser.tabs.create({url: url});
} 