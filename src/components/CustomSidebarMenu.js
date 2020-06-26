

//Import React
import React from 'react';

//Import all required component
import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

const CustomSidebarMenu = props => {
    let items = [
        {
            navOptionName: 'Home',
            screenToNavigate: 'HomeScreen',
        },
        {
            navOptionName: 'My Account',
            screenToNavigate: 'HomeScreen',

        },
        {
            navOptionName: 'Add/sell Product',
            screenToNavigate: 'HomeScreen',
        },
        {
            navOptionName: 'My Orders',
            screenToNavigate: 'HomeScreen',
        },
        {
            navOptionName: 'My Shipments',
            screenToNavigate: 'HomeScreen',
        },
    ];

    const handleClick = (index, screenToNavigate) => {

        props.navigation.toggleDrawer();
        global.currentScreenIndex = screenToNavigate;
        props.navigation.navigate(screenToNavigate);

    };
    return (
        <View style={stylesSidebar.sideMenuContainer}>
            <View style={stylesSidebar.profileHeader}>
                <View style={stylesSidebar.profileHeaderPicCircle}>
                    <Text style={{ fontSize: 25, color: '#0036B5' }}>
                        {'About React'.charAt(0)}
                    </Text>
                </View>
                <View>
                    <Text style={stylesSidebar.profileHeaderName}>Your Name</Text>
                    <Text style={stylesSidebar.profileHeaderDetails}>Account Details</Text>
                </View>
            </View>
            <View style={stylesSidebar.profileHeaderLine} />
            <View style={{ width: '100%', flex: 1 }}>
                {items.map((item, key) => (
                    <TouchableOpacity
                        style={{ borderRadius:20, padding: 15 }}
                        >
                        <View style={stylesSidebar.row}>
                            {/* <Image source={{ uri: item.image }} style={styles.pic} /> */}
                            <View>
                                <View style={stylesSidebar.nameContainer}>
                                    <Text style={stylesSidebar.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.navOptionName}</Text>
                                </View>
                                <View style={stylesSidebar.msgContainer}>
                                    <Text style={stylesSidebar.msgTxt}>{item.status}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                ))}
            </View>
        </View>
    );
};

const stylesSidebar = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FBFBFB',
        paddingTop: 40,
        color: 'white',
    },
    profileHeader: {
        flexDirection: 'row',
        backgroundColor: '#FBFBFB',
        padding: 15,
        textAlign: 'center',
    },
    profileHeaderPicCircle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        color: 'white',
        backgroundColor: '#707070',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileHeaderName: {
        color: '#0091FF',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    profileHeaderDetails: {
        color: '#515151',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
    },
    profileHeaderLine: {
        height: 1,
        marginHorizontal: 20,
        backgroundColor: '#FBFBFB',
        marginTop: 15,
        marginBottom: 10,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 12,
        width: 170,
    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#008B8B',
        fontSize: 12,
        marginLeft: 15,
    },
});
export default CustomSidebarMenu;