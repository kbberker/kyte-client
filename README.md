# Kyte Client

### Installing & Running

After cloning the repo you should run

```
npm install
```

Once all the node packages have been initialised I recommend you then go and start the [Kyte Server](https://github.com/kbberker/kyte-server) (instructions on how to do that are there).

After that you can run

```
npm start
```

Which will run the app in the development mode.<br>

The app relies on the Kyte server being on Port 3000 (which it should be by default). However, create-react-app also sets the React app to run on Port 3000 by default.<br>
You should be asked if you would like to run the app on another port instead, so just type "y" and press enter to continue.

It will then start the development server on http://localhost:3001/ (probably).

## Built With

- [create-react-app](https://github.com/facebook/create-react-app)

- [react-date-picker](https://github.com/Hacker0x01/react-datepicker/) - Very nice date picker for React
