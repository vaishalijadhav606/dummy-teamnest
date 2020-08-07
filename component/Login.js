import React, { Component } from 'react'
import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const userInfo = { email: 'admin', password: '12345' }

export class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor={colors.primaryBg} />
                <View style={styles.forms}>
                    <TextInput
                        placeholder="Enter email or mobile"
                        style={styles.textinput}
                        onChangeText={(email) => this.setState({ email })}
                        autoCapitalize="none"
                        value={this.state.email}
                    />
                    <TextInput
                        placeholder="Enter password"
                        style={styles.textinput}
                        secureTextEntry
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._login}
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text
                        style={styles.redirectLink}
                        onPress={() => Actions.changepassword()}
                    >
                        Change password
                    </Text>
                </View>
            </View>
        )
    }

    _login = async () => {
        if (userInfo.email === this.state.email && userInfo.password == this.state.password){
            Actions.home();
        }else{
            alert("Email or password is incorrect.");
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#0000FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    forms: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    textinput: {
        height: 40,
        borderColor: colors.gray,
        borderBottomWidth: 2,
        marginBottom: 20,
        width: 300
    },
    button: {
        backgroundColor: colors.primaryBg,
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
        width: 200,
        justifyContent: 'center'
    },
    btnText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: '800'
    },
    redirectLink: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.primaryText
    }
})

export default Login
