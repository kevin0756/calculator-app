This app uses nodemon for autobuilding the node server and create-react-app for swiftly generating the react application skeleton. Ensure you have these dependencies globally installed. To do so type in "npm install -g nodemon" and "npm install -g create-react-app" in your terminal/command prompt without the quotes.

Install Dependencies:
Once the project has been successfully forked, install dependencies by browsing into the project directory and typing in npm install. Once that is done, enter the 'client' folder and again execute npm install for installing the react dependencies. This might take a while.

Run the server:
This application does not make use of any database. To run the server, enter the project root directory (../calculator-app) and execute npm run dev in your terminal window. This will start the node and react server. The application should automatically launch in your default browser window once both servers are started. Make sure you have nothing running on ports 3000 and 5000, since the application makes use of these ports to run the client and server respectively.
