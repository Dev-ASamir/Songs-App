# marvel-characters

Songs App (Demo) for discovering Songs, Search and add your songs to favorite .

# IMPORTANT NOTE

I am using Local API provided by  JSON Server

# Main technologies used

- React Native
- JavaScript
- React Navigation (v5)
- JSON
- Redux

# Main functionality

- Home Screen user can view available songs and scroll to get more results through pagination .
- Search Screen user can search for specific song and if there are result it will appear or it will view no result message.
- Favorite Screen user can view favorite songs .
- Add Song Screen user can add song through it .

# Prerequisites

- React Native CLI to be installed. You can install it by running the command:

npm install -g react-native-cli

- Simulator or emulator to run the app on.

# Installation

First clone the repo using SSH or HTTPS. Here's an example using HTTPS:

git clone https://github.com/a7madsamir/Songs-App.git

Second run the following command to install project dependencies:

yarn install

in IOS

You will need to make one more step to install pods dependencies, run the following command in the project directory:

- cd ios && pod install

Third you need to run server to get data through this script:

json-server --watch ./db.json --port 3004 --delay 700

# Run on Device

- run yarn android or yarn ios to run on device or emulator.


# Used dependencies

    "@react-native-community/async-storage": "^1.12.0",
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^5.8.10",
    "@react-navigation/stack": "^5.12.8",
    "axios": "^0.20.0",
    "formik": "^2.2.6",
    "json-server": "^0.16.3",
    "lodash": "^4.17.20",
    "prop-types": "^15.7.2",
    "react": "16.13.1",
    "react-native": "0.63.2",
    "react-native-formik": "^1.7.8",
    "react-native-gesture-handler": "^1.9.0",
    "react-native-keyboard-aware-scroll-view": "^0.9.3",
    "react-native-percentage-circle": "^1.0.7",
    "react-native-progress-circle": "^2.1.0",
    "react-native-reanimated": "^1.13.2",
    "react-native-responsive-screen": "^1.4.1",
    "react-native-safe-area-context": "^3.1.9",
    "react-native-screens": "^2.16.1",
    "react-native-stars": "^1.2.2",
    "react-native-vector-icons": "^7.1.0",
    "react-redux": "^7.2.1",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.3.0",
    "validator": "^13.5.2",
    "yup": "^0.32.9"

    Also I am using eslint and prettier for better code formatting

![Home](https://i.ibb.co/0YwQpjS/Simulator-Screen-Shot-i-Phone-11-2021-03-17-at-18-46-47.png) ![Search](https://i.ibb.co/DYBnM5B/Simulator-Screen-Shot-i-Phone-11-2021-03-17-at-18-46-21.png) ![Add Song](https://i.ibb.co/3MPbR0n/Simulator-Screen-Shot-i-Phone-11-2021-03-17-at-18-38-24.png)![Favorite](https://i.ibb.co/9GC1zJ8/Simulator-Screen-Shot-i-Phone-11-2021-03-17-at-18-38-18.png)



