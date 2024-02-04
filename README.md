# Quote_generator

## General informations

This app uses [quotable api](https://api.quotable.io/quotes/random) to display random quotes.

## Technologies

Built using Node.JS and React.

### Node.JS

The backend files are inside the ```/backend``` directory.
1. ```api.js``` : File for route and server details definition
2. ```Dockerfile``` : File for Node.JS Docker setup (used later in docker-compose)
3. ```package.json``` : File containing the different dependencies needed

The frontend files are inside the ```/frontend``` directory.
1. ```/src``` : containing all code files structuring the React app
    * The different components are all separated in the ```/component``` directory.
    * ```index.js & index.css``` are the base files, importing the different components used and defining the default style rules
2. ```Dockerfile``` : File for React Docker setup (used later in docker-compose)
3. ```package.json``` : File containing the different dependencies needed

The files in the default directory are for the nginx setup and the docker compose code :
1. ```default.conf``` : File defining the nginx rules
2. ```Dockerfile``` : File for nginx Docker setup (used later in docker-compose)
3. ```docker-compose.yaml``` : File for docker compose (builds all containers and connects them with each other)

## Install and Run project

### Using "npm"

Make sure npm is installed on your device and the following ports are accessible : 3000 and 4200.

1. Clone this github repository
2. Open 2 terminals
    * Backend
        1. Get in backend directory ```cd **project_folder**/backend```
        2. Run ```npm install```
        3. Run ```node api.js```
        4. The following line should show up in your terminal ```App listening on port : 4200```

        If the default port (4200) is not accessible, you can change the used port in the ```api.js``` file
    * Frontend
        1. Get in frontend directory ```cd **project_folder**/frontend```
        2. run ```npm install```
        3. Run ```npm start```
        4. Open your browser on following address : [Quote generator](http://localhost:3000)

### Using Docker

1. Get in repository directory
2. Run ```docker-compose up --build```
3. Open your browser on following address : [Quote generator](http://localhost:8000)