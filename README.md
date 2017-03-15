<b><h3>Rocketmiles FE Dev Challenge</h3></b>
Small web app to present the current weather and a 7 day forecast. If user shares their location, it will pull and present weather based on current location. If user does not share location, app defaults to Rocketmiles HQ.

<b>Thought Process:</b><br>
First, I noted all expected output and functionality. Then, I brainstormed ideas on app layout and sketched out ideas. I thought about possible issues, problems and how to work around them. Redesigned and redid sketches. Thought about all the tools that would be absolutely necessary. I resolved to use as few tools as possible and build everything from scratch to maximize load time, performance and cut unnecessary bloat.

<b>How to run:</b><br>
Clone this repo

Cmdline
<i>npm install</i>

Open index.html in the browser of your choice

Be sure to disable any adblock or popup blockers as the location api requires this in order to get your location.

<b>How To run tests:</b><br>
Tests are located in the tests folder.<br>
<b>Required programs:</b><br>
-Node.js v6.10.0<br>
-Java v8 update 121<br>
-npm v3.10.10<br>
-Protractor v5.1.1<br>
-Jasmine v2.5.3<br>
-Selenium-webdriver 3.0.1<br>
-Webdriver-manager v12.0.3<br>
-Firefox v52

<b>To Install and Run:</b><br>
-Download, install and setup Node.js: https://nodejs.org/en/<br>
-Clone or download this repo to the directory of your choice.<br>

<b>To Setup:</b><br>
-Cmdline<br>
-Navigate to where you cloned this repo

Install all dependencies required for the tests<br>
<i>npm install</i>

<b>To Run:</b><br>
Check and mark what tests you'd like to run in rocketmiles-spec.js

Start the test server<br>
<i>npm start</i>

-New cmdline<br>
-Navigate to where you cloned this repo

Run the tests<br>
<i>npm test</i>

<b>Set Firefox permissions:</b><br>
Because the app asks for your location upon load, we could choose to ignore this and load the default location every run or we can setup a workaround through firefox profiles. The tests should work either way, but if you'd like the work around please follow below. If the below doesn't work, you may have to manually click the "Share Location" prompt, which is why I've included lengthy browser.waits to the beforeEach function.

Fix firefox permissions<br>
-Navigate to the site: https://awilso30.github.io/rocketmiles-weather/<br>
-Go to the Tools menu in the top taskbar, then select Page Info<br>
-Select the Permissions tab<br>
-Change the setting for Share Location to allowed

<b>To Do List:</b><br>
-Do unit tests<br>
-Add form validation<br>
-Increase responsiveness<br>
-Make panels wrap with media queries - force certain number of day per row<br>
-Add change units button - with radial button style<br>
-Sub out better icons (flat design)<br>
-Add high and low arrow icons<br>
-Attempt to use geolocator again(was giving me issues)<br>
-Host with Express or some other server<br>
-Get rid of screen flashing/loading issues on Firefox
