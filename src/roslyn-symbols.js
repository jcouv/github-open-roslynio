
var id = chrome.contextMenus.create(
{
    "id": "roslyn",
    "title": "Lookup on Roslyn.io",
    "type": "normal",
    "contexts": ["selection"],
    "documentUrlPatterns": ["https://github.com/*/roslyn/*"]
});
chrome.contextMenus.onClicked.addListener(genericOnClick);

function genericOnClick(info, tab) {
    //console.log("Clicked: " + info.selectionText);
    //console.log("item " + info.menuItemId + " was clicked");
    //console.log("info: " + JSON.stringify(info));
    //console.log("tab: " + JSON.stringify(tab));
    if (info.menuItemId == "roslyn") {
        chrome.tabs.create({
            selected: true,
            url: "http://source.roslyn.io/#q=" + info.selectionText
        });
    }
}