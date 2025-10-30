
## Network

- [Wireshark](https://www.wireshark.org/)
- [Proxyman](https://proxyman.io/)
- [mitmproxy](https://mitmproxy.org/)
- [Charles](https://www.charlesproxy.com/)
- [Frida](https://frida.re/)


**Postman**
- [Postman](https://www.postman.com/)


## DNS

CNAME: nom -> nom (canonical name)

- `nslookup domainName`


## Request

### Polling (HTTP request)

uni-directional refresh

![polling](https://user-images.githubusercontent.com/32497923/235453036-fd708f75-5ff6-4632-a608-794f9b93b6f1.png)

### Webhooks (callback)

Le client s'enregistre sur une URL de callback, les notifications arrivent sur une adresse de callback

![webhooks](https://user-images.githubusercontent.com/32497923/235453055-c5d118c3-25f5-4843-888a-435fca20d105.png)

### Websocket

! consomme des ressources

bi-directional connection / hand-shaking

![websocket](https://user-images.githubusercontent.com/32497923/235453072-0c23a113-a334-4284-b643-b2e4a1c21fc4.png)

### SSE - Server Sent Event
