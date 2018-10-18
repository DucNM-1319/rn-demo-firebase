import firebase from 'react-native-firebase'
import { loginAuto } from '../redux/user/saga';

export const User = {
    loginWithEmail: (userParam) => {
        console.log('firebase user', userParam)
        return firebase.auth()
            .signInWithEmailAndPassword(userParam.userInfo.email, userParam.userInfo.password)
            .then(response => response)
    }
}