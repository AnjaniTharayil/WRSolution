// Import React
import React from 'react';

//Import Navigators from React Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import all the screens needed
import LoginScreen from './src/screens/Login/LoginScreen';
import DrawerNavigationRoutes from './src/DrawerNavigationRoutes';
// import LoginScreen from './src/screens/Home/HomeScreen';

const Auth = createStackNavigator({
  //Stack Navigator for Login Screen
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

/* Switch Navigator for those screens which needs to be switched only once
  and we don't want to switch back once we switch from them to the next one */
const App = createSwitchNavigator({
  Auth: {
    /* Auth Navigator which includer Login will come once */
    screen: Auth,
  },
  DrawerNavigationRoutes: {
    /* Navigation Drawer as a landing page */
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      /* Hiding header for Navigation Drawer as we will use our custom header */
      // headerShown: false,
      headerMode: 'none',
    
    },
  },
});

export default createAppContainer(App);