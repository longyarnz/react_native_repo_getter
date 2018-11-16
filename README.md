# Data API

## Author
* Name: Ayodele Olalekan
* Email: lekanmedia@gmail.com

This is a Git Repo Getter App. 

## Building Blocks

This App was built using [React-native](https://facebook.github.io/react-native)

## Using The App
You will need Node, the React Native command line interface, an android emulator or a connected device and Android Studio to run the app. For more information, checkout this [Link.](https://facebook.github.io/react-native/docs/getting-started)

Connect an android device to your machine and turn on USB debugging option, so as to be able to run the app on your device.

Launch a terminal or console in the project folder and install react-native-cli dependencies:
```sh
  $ npm install react-native-cli
```
or 
```sh
  $ yarn add react-native-cli  
```
Once, it is installed, run this commands to install required dependencies on your local machine:
```sh
  $ npm install
```
or run yarn
```sh
  $ yarn
```
The start the app:
```sh
  $ npm start
```
or run yarn
```sh
  $ yarn start
```

Once the app fires up on your device, it will connect to github API and download repositories. By default, the app will download repositories from my [account](https://github.com/longyarnz)

To download repositories from other github accounts, change the ```"git_user"``` link in the package.json file to any github user.