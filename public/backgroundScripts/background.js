chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("button clicked");
    chrome.tabs.create({
      url: "index.html"
    });
  });
  