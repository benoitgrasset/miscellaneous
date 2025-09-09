Unlike XMLHttpRequest or fetch inside a beforeunload event (which often fail because browsers don’t wait for the request), the Beacon API is built for this scenario.

It works as a fire-and-forget mechanism.
You call:
navigator.sendBeacon(url, data);

The browser handles the rest, sending the POST request reliably in the background—even if the user has already navigated away.

A few things to know:

Only supports POST
Intended for small payloads
You don’t get a response back

Perfect for logging, analytics, or tracking events without blocking the user.


```js
window.addEventListener("unload", function () {
  const url = "/Log";
  const data = JSON.stringify({ 
    event: "page_unload",
    timestamp: Date.now(),
  });
  
  // Send as Blob or string
  navigator.sendBeacon (url, data);
});
``
