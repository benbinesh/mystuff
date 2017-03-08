# Gulp Sample Repo #
## NPM install Instruction
 To install Node.js, type the following command in your terminal:
```shell
sudo apt-get install nodejs
```
 Then install the Node package manager, npm:
```shell
sudo apt-get install npm
```
Create a symbolic link for node, as many Node.js tools use this name to execute.
```shell
sudo ln -s /usr/bin/nodejs /usr/bin/node
```
Now we should have both the Node and npm commands working:
```shell
$ node -v
v0.10.25
$ npm -v
1.3.10
```
## Project Setup
1. Git clone the repository
2. Run NPM install to load dependencies to root of project folder
```shell
sudo npm install
```
## Setup Gulp ##
Install the gulp command
```shell
npm install --global gulp-cli
```
Install gulp in your devDependencies
```shell
npm install --save-dev gulp
```
Run the gulp command in your project directory:
```shell
gulp
```
##Reference##
[Node.js Installation](http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/#ubuntu-package-manager )
[Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)



