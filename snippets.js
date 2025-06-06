// list all the links
function outputLinks() {
  return [...document.querySelectorAll("a")].map((a) => a.href);
}

// grabs all the texts
// NodeFilter.SHOW_TEXT: Ensures only text nodes are considered.
function getTextNodes() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function (node) {
        // Optional: skip whitespace-only text nodes
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  let node;
  const nodes = [];

  while ((node = walker.nextNode())) {
    nodes.push(node.nodeValue.trim());
  }

  return nodes.filter((t) => t);
}

// hilights layout elements visually
function hilightLayout() {
  document.body.style.outline = "5px solid red";
  [...document.querySelectorAll("*")].forEach(
    (el) => (el.style.outline = "1px dashed black")
  );
}
