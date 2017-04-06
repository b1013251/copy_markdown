function saveToClipboard(str) {
      var textArea = document.createElement("textarea");
      textArea.style.cssText = "position:absolute;left:-100%";

      document.body.appendChild(textArea);

      textArea.value = str;
      textArea.select();
      document.execCommand("copy");

      document.body.removeChild(textArea);
  }

var oneCopy = function(info, tab) {
  console.log("Copy this tab.");
  console.log(tab.title);
  console.log(tab.url);
  saveToClipboard("[" + tab.title + "]" + "(" + tab.url + ")");
}

var allCopy = function(info, tab) {
  console.log("Copy all tabs.");
  console.log(tab.title);
  console.log(tab.url);
}

var contexts = ["page","editable"];

var copyContexts = chrome.contextMenus.create({
  id: "copyContexts",
  title: "Copy this tab.",
  contexts: contexts,
  onclick: oneCopy
});

var copyAllContexts = chrome.contextMenus.create({
  id: "copyAllContexts",
  title: "Copy all tabs.",
  contexts: contexts,
  onclick: allCopy
});
