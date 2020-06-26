
//Import React and Hook we needed
import React, { useState } from 'react';

//Import all required component
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const loginData = require('./login.json');
import { Input } from 'react-native-elements';

const LoginScreen = props => {
    let [userEmail, setUserEmail] = useState('');
    let [userPassword, setUserPassword] = useState('');
    let [errortext, setErrortext] = useState('');
    var focused = false;
    const handleSubmitPress = () => {
        setErrortext('');
        if (!userEmail) {
            alert('Please fill Email');
            return;
        }
        if (!userPassword) {
            alert('Please fill Password');
            return;
        }
        var dataToSend = { user_email: userEmail, user_password: userPassword };
        if (loginData.user != dataToSend.user_email && loginData != dataToSend.user_password) {
            alert('Incorrect Login Credentials');
        }
        else {
            AsyncStorage.setItem('user_id', loginData.user_id);
            console.log(loginData.user_id);
            props.navigation.navigate('DrawerNavigationRoutes');
        }
    }

    return (
        <View style={styles.mainBody}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={styles.firstcontainer}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{
                            width: '70%',
                            height: 100,
                            resizeMode: 'contain',
                            margin: 30,
                        }}
                    />
                    <Text style={{ color: '#fff', fontSize: 16 }}> Sign In </Text>
                </View>
                <View>
                    <View style={{ marginTop: 100, padding: 10, alignItems: 'center' }}>
                        <KeyboardAvoidingView enabled>
                            <View style={{ alignItems: 'center' }}>

                            </View>
                            <View style={styles.SectionStyle}>
                                <Input
                                    label='Username'
                                    onChangeText={UserEmail => setUserEmail(UserEmail)}
                                    onFocus={() => focused = true}
                                    onBlur={() => focused = false}
                                    inputContainerStyle={focused ? { color: '#00b5ec' } : {  }}

                                // errorStyle={{ color: 'red' }}
                                // errorMessage='Enter a valid username'
                                />


                            </View>
                            <View style={styles.SectionStyle}>
                                <Input
                                    label='Password'
                                    onChangeText={UserPassword => setUserPassword(UserPassword)}
                                    secureTextEntry={true}
                                    onFocus={() => focused = true}
                                    onBlur={() => focused = false}
                                    inputContainerStyle={focused ? { color: '#00b5ec' } : {  }}

                                // errorStyle={{ color: 'red' }}
                                // errorMessage='Enter a valid username'
                                />

                            </View>
                            <Text style={{ color: '#535353', textAlign: 'right', marginRight: 20 }}> Forgot Password? </Text>
                            {errortext != '' ? (
                                <Text style={styles.errorTextStyle}> {errortext} </Text>
                            ) : null}
                            <TouchableOpacity
                                style={[styles.buttonContainer, styles.loginButton]}
                                activeOpacity={0.5}
                                onPress={handleSubmitPress}>
                                <Text style={styles.buttonTextStyle}>Sign In</Text>
                            </TouchableOpacity>

                        </KeyboardAvoidingView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    firstcontainer: {
        backgroundColor: '#004980',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        justifyContent: 'center',
        alignItems: 'center',

    },

    SectionStyle: {
        flexDirection: 'row',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        width: Dimensions.get('window').width - 50,
        borderRadius: 30,
        margin: 10

    },

    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 60,
        width: Dimensions.get('window').width - 50,
        borderRadius: 30,
        margin: 10
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    buttonTextStyle: {
        color: '#fff'
    }
});