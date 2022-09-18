// // import React, {useState, useEffect} from 'react';
// // import {View, Text} from 'react-native';
// // import auth from '@react-native-firebase/auth';
// // import MyBottomTabNavigator from '../navigation/myBottomNavigator';
// // import SignUpScreen from './signUp';
// // import SignInScreen from './logIn';
// // import PortfolioScreen from '../screens/PortfolioScreen';

// // const AuthStateCheck = () => {
// //   // Set an initializing state whilst Firebase connects
// //   const [initializing, setInitializing] = useState(true);
// //   const [user, setUser] = useState();
// //   // auth().signOut();
// //   //for test

// //   // Handle user state changes
// //   function onAuthStateChanged(user) {
// //     setUser(user);
// //     if (initializing) setInitializing(false);
// //   }

// //   useEffect(() => {
// //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
// //     return subscriber; // unsubscribe on unmount
// //   }, []);

// //   if (initializing) return null;
// //   console.log(user, 'oooo');
// //   if (!user) {
// //     return <SignInScreen />;
// //   }
// //   //else if (!user.emailVerified) {
// //   //   // let sentOnce = false;
// //   //   // if (!sentOnce) {
// //   //   //   firebase.auth().currentUser.sendEmailVerification();
// //   //   //   sentOnce = true;
// //   //   // }
// //   //   return (
// //   //     <Text>Email Sent. Check Your Email for Email Verification Link</Text>
// //   //   );
// //   // } else {

// //   //}
// //   //return <MyBottomTabNavigator />;
// //   return <PortfolioScreen />;
// // };

// // export default AuthStateCheck;

// /////////////////////////////////
// //
// //////////////////////////////////////
// ////////////////////////////////

// import React, {useState} from 'react';
// import {View, Text, TextInput, SafeAreaView, Button, Image} from 'react-native';
// import auth from '@react-native-firebase/auth';
// // import firebase from '@react-native-firebase/app';
// //import {authFunctionSignIn} from './authHelper';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

// const SignInScreen = () => {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   const [userInfo, setUserInfo] = useState();
//   GoogleSignin.configure({
//     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
//     webClientId:
//       '87673845216 - ld1k5c68j9nr2bn7jtic2ri25eocm9fg.apps.googleusercontent.com',
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
//       console.log(
//         '++++++++++++++++++++++++++++++++=iside function signin try1',
//       );
//       const userInfoo = await GoogleSignin.signIn();
//       console.log(
//         '++++++++++++++++++++++++++++++++=iside function signin try2',
//       );
//       setUserInfo(userInfoo);
//       //this.setState({userInfo});
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
//         console.log('some other error happened', error);
//       }
//     }
//   };
//   const signOut = async () => {
//     try {
//       await GoogleSignin.signOut();
//       //this.setState({user: null});
//       // Remember to remove the user from your app's state as well
//       setUserInfo();
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   // GoogleSignin.signOut();
//   return (
//     <View>
//       {console.log('--------------------------------', userInfo)}
//       {!userInfo ? (
//         <Button onPress={signIn} title="Log In w google" color="#841584" />
//       ) : (
//         <>
//           <Text>{userInfo.user.givenName}</Text>
//           <Text>{userInfo.user.familyName}</Text>
//           <Image
//             source={{
//               uri: userInfo.user.photo,
//             }}
//             style={{
//               width: 32,
//               height: 32,
//               resizeMode: 'center',
//               borderRadius: 16,
//             }}
//           />
//           <Button onPress={signOut} title="Sign Out" color="#841584" />
//         </>
//       )}
//     </View>
//   );
// };

// export default SignInScreen;

import {View, Text} from 'react-native';
import React from 'react';

const AuthenticationCheck = () => {
  return (
    <View>
      <Text>authenticationCheck</Text>
    </View>
  );
};

export default AuthenticationCheck;
