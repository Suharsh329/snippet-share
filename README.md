<h1 align="center">snippet-share</h1>

 ![](screenshots/home-page.png) 

## Description

An application to browse, create and save code snippets. Somewhere along the lines of GitHub Gists.  
snippet-share is bundled with Vue.js and Node.js + Express.js + TypeORM.

## Table of Contents

<!--ts-->
   * [Description](#description)
   * [Local Installation](#local-installation)
   * [Features](#features)
   * [License](#license)
<!--te-->


## Local Installation

### Client Side

```bash
git clone git@github.com:Suharsh329/snippet-share.git  
cd client
npm install  
```

Start the development server 
```bash
npm run serve
```

### Server Side

```bash
git clone git@github.com:Suharsh329/snippet-share.git  
cd server  
cp ormconfig.json.example ormconfig.json // Add configurations  
npm install  
```
<!--
Before using the api end-points, the database must be initialized and populated.  
```bash
npm run migrations
``` 
The command will create the tables(relations) in your database with all the necessary constraints.  -->

Start the development server 
```bash
npm run start
```

## Features

* View code snippets without needing an account
* Create code snippets
* Bookmark snippets
* Like snippets
* Search for snippets based on a tag, title or user

## License

[MIT](https://github.com/Suharsh329/snippet-share/blob/master/LICENSE)