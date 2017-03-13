 <b><h3>Rocketmiles FE Dev Challenge</h1></b>
Small web app to present the current weather and a 7 day forecast. If user shares their location, it will pull and present weather based on current location. If user does not share location, app defaults to Rocketmiles HQ.

<b>Thought Process:</b><br>
I read the directions a number of times and noted all expected output and functionality. Brainstormed ideas on app layout and sketched out layout ideas. Thought about possible issues, problems and how to work around them. Redesigned and redid sketches. Thought about all the tools for this that would be absolutely necessary. I resolved to use as few tools as possible and build everything from scratch. I wanted to maximize load time and performance as well as cut unnecessary bloat.

<b>How to run:</b><br>
Just open index.html in the browser of your choice!


<b>How To run tests:</b><br>
Tests are located in the tests folder.<br>
<b>Required programs:</b><br>
-Node.js<br>
-Protractor<br>
-Jasmine<br>

<b>To Install and Run:</b><br>
-Clone this repo to the directory of your choice.<br>
-Download, install and setup Node.js: https://nodejs.org/en/<br>
-Open a cmdline and install Protractor(http://www.protractortest.org/#/) and Jasmine through npm. (https://jasmine.github.io/)<br>
-Start test server and run tests.

<b>To Install:</b><br>
Install Protractor<br>
<i>npm install -g protractor</i><br>

Install Jasmine<br>
<i>npm install -g jasmine</i><br>

Update the webdriver program<br>
<i>webdriver-manager update</i>

<b>Run:</b><br>
Start the test server<br>
<i>webdriver-manager start</i>

Open a new cmdline, navigate to the directory you cloned this repo to and run<br>
<i>protractor rocketmiles-conf.js</i>
