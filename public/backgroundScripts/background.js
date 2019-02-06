chrome.browserAction.onClicked.addListener(function(tab) {
  url = new URL(tab.url)
  chrome.tabs.update({
    active:true,
    url: "index.html?url="+url.pathname
  });
});
