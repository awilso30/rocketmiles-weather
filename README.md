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

<b>Tests</b>
Tests are deprecated after finding a bug late last night.

<b>To Do List:</b><br>
-Do unit tests<br>
-Fix e2e tests<br>
-Add form validation<br>
-Increase responsiveness<br>
-Make panels wrap with media queries - force certain number of day per row<br>
-Add change units button - with radial button style<br>
-Sub out better icons (flat design)<br>
-Add high and low arrow icons<br>
-Attempt to use geolocator again(was giving me issues)<br>
-Host with Express or some other server<br>
-Get rid of screen flashing/loading issues on Firefox<br>
-Optimize load times<br>
-Add more visually appealing loading notification
