Trello Dashboard 
================

Trello dashboard is the JS application that provides access to organization boards without basic authorization. Informations are granted via API key obtained from https://developers.trello.com/get-started/start-building website and session token generated via JS function Trello.authorize().  Application needs nodejs packages grunt, grunt-cli and bower so  command 
<br/>**npm -g install grunt grunt-cli bower**<br/> 
must be run in system terminal. 

In project root directory applied commands<br/> 
**npm install** <br/>
and <br/>
**bower install**<br/>  
will download all project dependencies.

User can type: <br/>

**grunt --force** - for sources minification (output in dist directory), <br/>
**grunt serve --force** - for starting application via local nodejs webserver. 

Trello API key can be passed in **app\index.html** file in line:
```html
<script src="https://api.trello.com/1/client.js?key=[key]"></script>
```
Session token can be provided via 

$rootScope.token variable (line 3 in scripts\services\trelloLibrary.js)
