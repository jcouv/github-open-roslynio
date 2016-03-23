
var id = chrome.contextMenus.create(
{
    "title": "Lookup on Roslyn.io",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": genericOnClick,
    "documentUrlPatterns": ["https://github.com/*/roslyn/*"]
});

function genericOnClick(info, tab) {
    //console.log("Clicked: " + info.selectionText);
    //console.log("item " + info.menuItemId + " was clicked");
    //console.log("info: " + JSON.stringify(info));
    //console.log("tab: " + JSON.stringify(tab));
    chrome.tabs.create({
        selected: true,
        url: "http://source.roslyn.io/#q=" + info.selectionText
    });
}