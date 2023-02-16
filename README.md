# music-app-frontend

This is the frontend of the music app built with NextJs & Laravel on the backend.
You can find the corresponding backend  [here](https://github.com/dushimsam/music-app-backend) 
Here are the steps to run this server. 

## START THE FRONTEND

### 1.  Install from the source
#### Install dependencies for the frontend:

`cd ../frontend`
<br /><br />
`npm install`

#### Start the frontend server:

`npm run dev`

###### ALL SET UP NOW 👏 ... , you can access the application at http://localhost:3000/

### 2. Run the Frontend Via docker
Make sure you have docker installed on the PC, then run each of the following commands in order.</br></br>
`docker pull dushsam/zatec_client:latest`</br></br>
`docker run -p 3000:3000 dushsam/zatec_client:latest`

Alternatively, You can also run it after building the image from the source files.

From the project's root directory run the following commands: </br>

`cd frontend` <br /><br />
`docker build --tag zatec_client:latest .` <br /><br />
`docker run -p 3000:3000 zatec_client` <br />
