#! /bin/bash
        
        sudo apt update
        sudo apt -y install nodejs npm
        
        wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
      
        echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
        sudo apt-get update
        sudo apt-get install -y mongodb-org
        git clone https://github.com/BU-Spark/web-mpc
        cd web-mpc/
        git checkout dev
        git submodule init
        git submodule update
        npm install
        cd jiff/
        npm install
        cd ../
        npm install -g forever
        sudo apt-get install -y authbind
        sudo mkdir -p /data/db
        sudo mongod &
        cd server/
        authbind --deep forever -o log.txt -e error.txt index.js
