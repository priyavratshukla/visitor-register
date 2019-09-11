# VisitorManagementApp
===============================================================================
1. Paperless Records for Visitors and Host<br />
2. Save Visits with Pictures and GPS Locations<br />
3. Online and/or Offline App<br />
4. One App for multiple platforms (iOS, Android, Desktop, Cloud etc.)<br />
5. Unlimited Storage (only limited to server/database hosting).<br />
6. Store and Access millions of records instantly.<br />
7. Paperless and Mobile on-premise App.<br />
8. Instant access to ALL guest/host historical records at guest check-in.<br />


#Let's get started :-
==========================================================================

#Front end :-
===========================================================================

At first, We are going to work on a static website using HTML, CSS and Bootstrap.
We are going to use part of this website in our Angular App. 
If you are using VisualCode editor, please install a live-server extension.
Otherwise, you can use any webserver to host your website.
Now, let's create index.html, login.html, signup.html, aboutus.html, dashboard.html, reports.html and settings.html and host this to your webserver.
At this point, we only want to make sure that individual html pages work fine only, these pages don't need to be connected or have any business logic because we are going to write all business, routing and other logic in Angular 7. 

Before we start, Please make sure you have latest version of node js installed.
Let's head out to https://nodejs.org/en/ and grab latest nodejs.
Once you have nodejs installed, open command prompt/terminal window.
$ node -v // make sure, this command comes back with a node version
$ npm -v // make sure, this command comes back with a npm version

$ npm install -g @angular/cli
$ mkdir app
$ cd app
$ mkdir client
$ mkdir server
$ cd client
$ ng serve

#Back end :-
==============================================================================================
$ cd server
$ npm init
$ npm install --save 
$ npm install --save nodemon 
$ npm install --save cors 
$ npm install --save express 
$ npm install --save dotenv 
$ npm install --save jsonwebtoken 
$ npm install --save mongoose 
$ npm install --save bcrypt@3.0.1 
$ npm install --save body-parser
$ nodemon app