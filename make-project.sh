#!/bin/bash

:'
To run from the command line:
chmod u+x ./make-project.sh # (or wherever you want to put it)
./make-project.sh <project-name> "<package> <package> <package> ..."
'

:'
Example NPM script to run:
Add "makenode": "./make-project.sh $npm_config_dirname $npm_config_pkgs" to package.json
npm run makenode --dirname="testDIR" --pkgs="axios mocha"
'

mkdir $1
cd $1
touch index.js
npm init -y

# Add pased in packages
echo 'node_modules' >>./.gitignore
npm i $2

# Add prettier, pull in the config files and format script
npm i prettier
wget https://raw.githubusercontent.com/petegq/config/master/.prettierignore
wget https://raw.githubusercontent.com/petegq/config/master/.prettierrc
npm pkg set scripts.format='prettier --write "**/*.{js,jsx,ts,tsx}"'

# Add nodemon, dev and kill scripts
npm i nodemon
npm pkg set scripts.dev='nodemon index.js --port 8000'
npm pkg set scripts.kill='lsof -ti tcp:8000 | xargs kill'

# Initialize git and open in VS Code
git init
git add .
git commit -m 'Initial commit'
code .
