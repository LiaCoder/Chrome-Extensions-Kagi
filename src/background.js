chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "https://translate.kagi.com/" });
});