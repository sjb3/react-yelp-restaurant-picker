Set up by Ben Awad
:

1) yarn add --dev babel-cli babel-preset-env babel-preset-stage-3
=> so you can use import...

2) eslint --init
3) finally add extra command from eslint-config-airbnb
: (
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
4) don't forget to add scripts in your package.json fine
  "scripts": {
    "start": "nodemon --exec babel-node index.js"
  },

#################################################################
HOW TO RUN THIS PROJECT?
##################################################################
=> modified for this project(s)
like this:
   "start:server": "nodemon --exec babel-node src/server/index.js",
   for back-end you need to use 'yarn run start:server'

HOWEVER, due to 'UnhandledPromiserejectionWarning',
  "dev": "nodemon --trace-warnings --exec babel-node src/server/index.js" was used to track the error/warnings
  try 'yarn run dev'
  !!! this issue has to be investigated for full functionality

###################################################################

# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```
