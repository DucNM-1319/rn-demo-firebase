import React from 'react'
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import firebase from 'react-native-firebase'
import Button from 'react-native-button'
import { connect } from 'react-redux'

import * as ActionTypes from './../redux/actionTypes'

class Login extends React.Component {
  state = { loaded: false, email: '', password: '', errorMessage: null }

  handleLogin = () => {
    let userInfo = {
      email: this.state.email,
      password: this.state.password
    }
    if (userInfo.email.trim() != "" && userInfo.password.trim() != "") {
      this.props.dispatch({type: ActionTypes.LOGIN, userInfo})
    } else {
      Alert.alert(
        'Warning',
        'Enter email and password',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: true }
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('login componentWillReceiveProps', JSON.stringify(nextProps.user))
    if(nextProps.user.userInfo) {
      this.props.navigation.navigate('Main')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#47525E', fontSize: 30, marginBottom: 30}}>Sign in</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red', fontSize:50 }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button onPress={this.handleLogin} >Login</Button>
        <Button style={{marginTop: 10}}
          onPress={() => this.props.navigation.navigate('SignUp')}
        >Don't have an account? Sign Up</Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#8492A6',
    borderWidth: 1,
    marginBottom: 10
  }
})

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)