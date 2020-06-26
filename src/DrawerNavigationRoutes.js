

//Import React
import React from 'react';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
    Image,
    Dimensions,
} from 'react-native';
//Import External Screens
import HomeScreen from './screens/Home/HomeScreen';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import NavigationDrawerHeader from './components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
    First: {
        screen: HomeScreen,

        navigationOptions: ({ navigation }) => ({
            title: <Image style={{
                alignSelf: 'center',
                resizeMode: 'contain',
            }} source={require('./assets/logo.png')} />
            ,
            headerTitleStyle:{
                width:Dimensions.get('window').width-100,
                height: Dimensions.get('window').height / 5,
                alignSelf: 'center',
            },
            headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#0091FF',
                height: Dimensions.get('window').height / 5,
            },

        }),
    },
});



const DrawerNavigatorRoutes = createDrawerNavigator(
    {
        HomeScreen: {
            screen: FirstActivity_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Home Screen',
            },
        },

    },
    {
        contentComponent: CustomSidebarMenu,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
);
export default DrawerNavigatorRoutes;