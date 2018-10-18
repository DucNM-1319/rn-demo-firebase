import React, {Component} from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import rootSaga from './src/redux/sagas'
import allReducers from './src/redux/reducers'
// import the different screens
import Loading from './src/screen/Loading'
import SignUp from './src/screen/SignUp'
import Login from './src/screen/Login'
import Main from './src/screen/Main'
// create our app's navigation stack

const sagaMiddleware = createSagaMiddleware()
let store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const AppNavigation = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Login'
  }
)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigation ref={nav => {this.navigator = nav}} />
      </Provider>
    )
  }
}

export default App