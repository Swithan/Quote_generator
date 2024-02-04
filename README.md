# Quote_generator

This app uses [quotable api](https://api.quotable.io/quotes/random) to display random quotes.

Built using Node.JS and React.

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