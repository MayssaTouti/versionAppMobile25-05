/**
 * @format
 */
import { AppRegistry } from "react-native";

import App from './App';
import {name as appName} from './app.json';
//import app from './src/ServerExample'; 
//import app from './src/testFetch/SearchComponent';



AppRegistry.registerComponent(appName, () => App);
