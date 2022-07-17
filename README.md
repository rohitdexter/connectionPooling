# Connection Pooling

This is a connection pooling project for showing the benefits for connection pooling along with load scripts.

---
## Requirements

For development, you will only need Node.js and a node global package

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.16.1

    $ npm --version
    6.14.12

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/rohitdexter/connectionPooling
    $ cd connectionPooling
    $ npm install

## Install PostgreSQL Database

    $ sudo add-apt-repository "deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main"    
    $ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -   
    $ sudo apt-get update    
    $ sudo apt-get install postgresql-13
    $ sudo -iu postgres    
    $ psql    
    $ CREATE USER "your username" WITH PASSWORD 'your password';    
    $ ALTER USER "your user" WITH SUPERUSER;  
    $ CREATE DATABASE 'dbname';
    $ CREATE USER "any name" WITH PASSWORD 'any password';
    $ GRANT ALL PRIVILEGES ON DATABASE 'dbname' to 'your created user for this database';

## Connect PostgreSQL Database

    $ PGPASSWORD='dbpassword' psql -h 'hostname' -d 'dbname' -U 'username'
## Create Table

    $ create table "users"(id serial primary key,name varchar(50) not null);
  

## Running the project

    $ node filename.js

