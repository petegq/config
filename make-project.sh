#!/bin/bash

# cp make-project.sh /usr/local/bin/make-project.sh
# chmod u+x /usr/local/bin/make-project.sh
# echo alias proj="bash /usr/local/bin/make-project.sh" >> ~/.zshrc

cd

mkdir ~/projects/$1

cd ~/projects/$1

npm init -y

code .