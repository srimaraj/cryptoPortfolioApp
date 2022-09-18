// import React, {useState} from 'react';
// import {View, Text, TextInput, SafeAreaView, Button} from 'react-native';
// import auth from '@react-native-firebase/auth';
// // import firebase from '@react-native-firebase/app';
// import {authFunctionSignIn} from './authHelper';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

// const SignInScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   GoogleSignin.configure({
//     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
//     webClientId:
//       '87673845216-u0svgft5c1d5egs2j52brfvee73vmkgo.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     hostedDomain: '', // specifies a hosted domain restriction
//     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//     accountName: '', // [Android] specifies an account name on the device that should be used
//     iosClientId: '', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//     googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
//     openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
//     profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
//   });

//   // function authFunctionCall() {
//   //   //authFunctionSignIn(email, password);
//   //   //var google_provider = auth.GoogleAuthProvider;
//   //   auth()
//   //     .signInWithEmailAndPassword(email, password)
//   //     .then(re => console.log('successssss', re))
//   //     .catch(err => console.log('errrrrrrrr', err));
//   // }
//   signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       this.setState({userInfo});
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//         console.log('user cancelled the login flow');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//         console.log('operation (e.g. sign in) is in progress already');
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//         console.log('play services not available or outdated');
//       } else {
//         // some other error happened
//         console.log('some other error happened');
//       }
//     }
//   };

//   return (
//     <View>
//       <Text>hii</Text>
//       <TextInput placeholder="email" onChangeText={setEmail} value={email} />
//       <TextInput
//         // style={styles.input}
//         onChangeText={setPassword}
//         value={password}
//         secureTextEntry={true}
//         placeholder="password"
//       />
//       <Button onPress={signIn} title="Log In" color="#841584" />
//     </View>
//   );
// };

// export default SignInScreen;
