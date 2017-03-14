<b><h3>Rocketmiles FE Dev Challenge</h3></b><br>
Small web app to present the current weather and a 7 day forecast. If user shares their location, it will pull and present weather based on current location. If user does not share location, app defaults to Rocketmiles HQ.

<b>Thought Process:</b><br>
First, I noted all expected output and functionality. Then, I brainstormed ideas on app layout and sketched out ideas. I thought about possible issues, problems and how to work around them. Redesigned and redid sketches. Thought about all the tools that would be absolutely necessary. I resolved to use as few tools as possible and build everything from scratch to maximize load time, performance and cut unnecessary bloat.

<b>How to run:</b><br>
Navigate to https://awilso30.github.io/rocketmiles-weather/

<b>How To run tests:</b><br>
Tests are located in the tests folder.<br>
Required programs:<br>
-Node.js<br>
-Protractor<br>
-Jasmine

<b>To Install and Run:</b><br>
-Download, install and setup Node.js: https://nodejs.org/en/<br>
-Clone or download this repo to the directory of your choice.

<b>To Setup:</b><br>
-Open a cmdline<br>
-Navigate to where you cloned this repo

<b>Set Firefox permissions:</b><br>
Because the app asks for your location upon load, we could choose to ignore this and load the default location every run or we can setup a workaround through firefox profiles. The tests should work either way, but if you'd like the work around please follow below. If the below doesn't work, you may have to manually click the "Share Location" prompt, which is why I've included lengthy browser.waits to the beforeEach function.

<b>Fix firefox permissions</b><br>
-Navigate to the site: https://awilso30.github.io/rocketmiles-weather/ -Go to the Tools menu in the top taskbar, then select Page Info -Select the Permissions tab -Change the setting for Share Location to allowed

Install all dependencies required for the tests<br>
<i>npm install</i>

<b>To Run:</b><br>
Check and mark what tests you'd like to run in rocketmiles-spec.js

Start the test server<br>
<i>npm start</i>

-Open a new cmdline<br>
-Navigate to where you cloned this repo

Run the tests<br>
<i>npm test</i>

<b>To Do List:</b><br>
-Add form validation -Increase responsiveness<br>
-Take flags off logo and convert to text for responsive logo<br>
-Make panels wrap with media queries - force certain number of day per row<br>
-Add change units button - with radial button style -Sub out better icons (flat design)<br> 
-Add high and low arrow icons -Change days to days of the week
