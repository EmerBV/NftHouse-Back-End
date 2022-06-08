### Install Dependencies (frontend & backend)

```
npm install
```
### Seed Database

You can use the following commands to seed the database with some sample users and assets as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy 
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://54.144.255.88/](http://54.144.255.88/) to view the React app in your browser.

## Node API access via routes

List of all NFTs:

- http://ec2-54-144-255-88.compute-1.amazonaws.com/api/assets


Find an NFTs by ID:

- http://ec2-54-144-255-88.compute-1.amazonaws.com/api/assets/id

