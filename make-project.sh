#!/bin/bash

# cp make-project.sh /usr/local/bin/make-project.sh
# chmod u+x /usr/local/bin/make-project.sh
# echo alias proj="bash /usr/local/bin/make-project.sh" >> ~/.zshrc

mkdir $1
cd $1
touch index.js
npm init -y
echo 'node_modules' >>./.gitignore
npm i $2
wget https://raw.githubusercontent.com/petegq/config/master/.prettierignore
wget https://raw.githubusercontent.com/petegq/config/master/.prettierrc
npm i prettier
git init
git add .
git commit -m 'Initial commit'
code .
