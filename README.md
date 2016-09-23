# messenger-app
Messenger application prototype builded with <3 and Javascript
## Our Stack
- [Feathers js](http://feathersjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React js](https://facebook.github.io/react/)
- [Browserify](http://browserify.org/)
- [Bootstrap](http://getbootstrap.com/)
- [Docker](https://www.docker.com/)


## Requirements

You'll need the following software installed to get started.

  - [Node.js](http://nodejs.org): Use the installer for your OS.
  - [Git](http://git-scm.com/downloads): Use the installer for your OS.
    - Windows users can also try [Git for Windows](http://git-for-windows.github.io/).
  - [Bowserify](http://browserify.org/) : Run `npm install -g browserify watchify`
    - Depending on how Node is configured on your machine, you may need to run `sudo npm install -g browserify watchify` instead, if you get an error with the first command.
- [Yeoman](http://yeoman.io/generators/) Run `npm install -g yo  generator-feather`
    - Depending on how Node is configured on your machine, you may need to run `sudo npm install -g yo generator-feather`


## Get Started

Clone this repository

```bash
git clone git@github.com:nmarcetic/messenger-app.git
```

Change into the directory.

```bash
cd messenger-app
```

Install the dependencies. If you're running Mac OS or Linux, you may need to run `sudo npm install` instead, depending on how your machine is configured.

```bash
npm install
```

To start the server, run:

```bash
npm start
```
This will run and assemble our  app.
 **Now go to `localhost:3030` in your browser to see it in action.**

## Docker
The application is not yet fully containerized,  [docker-compose](https://docs.docker.com/compose/) is responsible to spin our composition, for now we just run MongoDB container to avoid installing MongoDB on local env.
```bash
docker-compose up -d
```



## Client code
Since we use power of browserify to split our client code in modules, like we do with nodejs, we must build client side code running the compiling process, without watching any files, use the `npm run build` command .
You can check `public/build/` folder for `app.js` output (contains all our client side code with all bundles).


**Note** When you change any client side file located under /public/src/ you must run `npm run build` command to apply the changes (e.g rebuild the code).


#### Live reload coming soon
Since we use [watchify](https://github.com/substack/watchify) which is watch mode for browserify builds, we can also watch for our source files changes runing `npm run watch`.  **Note** Use this only on local env for development purpose.
## Server code
Each changes, requires server reload, stop the server `ctrl+c` and run `npm start` again.
