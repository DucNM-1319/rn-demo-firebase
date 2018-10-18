import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  componentWillMount() {
    let user = this.props.user.userInfo
    console.log('main will mount props', user)
    if(user != null) {
      this.setState({currentUser: user})
    }
  }

  handleSignOut = () => {
    if (this.state.currentUser != null) {
      firebase
        .auth()
        .signOut()
        .then(() => this.props.navigation.navigate('Login'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    let currentUser = this.state.currentUser
    console.log('main render state', currentUser)
    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title="Sign Out" onPress={this.handleSignOut} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)