var allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
var tmptxt, tmpnode;

while (allTextNodes.nextNode()) {
  tmpnode = allTextNodes.currentNode;
  tmptxt = tmpnode.nodeValue;
  tmpnode.nodeValue = tmptxt
    .replace(/avocado/gi, "freeshavocadoo")
    .replace(/aesthetic/gi, "a e s t h e t i c");
};