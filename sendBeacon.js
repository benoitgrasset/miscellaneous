window.addEventListener("unload", function () {
  const url = "/Log";
  const data = JSON.stringify({ 
    event: "page_unload",
    timestamp: Date.now(),
  });
  
  // Send as Blob or string
  navigator.sendBeacon (url, data);
});
