# Codeigniter Boiler plate #
## NPM install Instruction ##
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

## Project Setup ##
1. Git clone the repository
2. Run NPM install to load dependencies to root of project folder

```shell
sudo npm install
```
3. Run composer install to load dependencies to root of project folder
```shell
sudo composer install
```
4. Create .env file for setting local variable  
```apacheconfig
CI_ENV=development

##DB settings 
DB_HOST=localhost
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=


#mail settings

MAIL_DRIVER=
MAIL_HOST=
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=

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


## Reference ##
1. [Node.js Installation](http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/#ubuntu-package-manager )
2. [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)


