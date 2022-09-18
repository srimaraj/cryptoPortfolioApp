// /* eslint-disable react-native/no-inline-styles */
// import React, {useState, useEffect} from 'react';
// import {View, Text, TouchableOpacity, Image} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

// export default function App() {
//   GoogleSignin.configure({
//     // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//     webClientId:
//       '440331552618-qmeinlp8mmfg7j7mcq2so39rraid4j1d.apps.googleusercontent.com',
//     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     //hostedDomain: '', // specifies a hosted domain restriction
//     // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//     // accountName: '', // [Android] specifies an account name on the device that should be used
//     iosClientId:
//       '440331552618-1m6irioee05ei3jt5rq9a588tajn4c11.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//     googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
//     openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
//     profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
//   });

//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   function onAuthStateChanged(user) {
//     console.log('SRIMARAJ USER', user);
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   async function onGoogleButtonPress() {
//     // Get the users ID token
//     const {idToken} = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
//   }
//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '100%',
//           width: '100%',
//         }}>
//         <TouchableOpacity
//           onPress={() => {
//             onGoogleButtonPress()
//               .then(() => console.log('Signed in with Google!'))
//               .catch(error => console.log(error, 'srimaraj--'));
//           }}
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: 60,
//             width: 200,
//             backgroundColor: 'grey',
//           }}>
//           <Text>Login</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View
//       style={{
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100%',
//         width: '100%',
//       }}>
//       <TouchableOpacity
//         onPress={() =>
//           auth()
//             .signOut()
//             .then(() => {
//               GoogleSignin.revokeAccess();
//             })
//         }
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: 60,
//           width: 200,
//         }}>
//         <Text>{user.displayName}</Text>
//         <Text>{user.email}</Text>
//         {/* <Text>{user.photoURL}</Text> */}
//         <Image
//           source={{uri: user.photoURL}}
//           style={{width: 60, height: 60, borderRadius: 60}}
//         />
//         <Text>Log out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import MyBottomTabNavigator from './src/navigation/myBottomNavigator';
import {EventRegister} from 'react-native-event-listeners';
import ThemeContext from './config/themeContext';
import theme from './config/themes';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoderWithRipples} from './src/screens/Loader';
import AuthContext from './config/authContext';

// const Stack=createNativeStackNavigator();

const App = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      '440331552618-qmeinlp8mmfg7j7mcq2so39rraid4j1d.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //hostedDomain: '', // specifies a hosted domain restriction
    // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId:
      '440331552618-1m6irioee05ei3jt5rq9a588tajn4c11.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'onChangeTheme',
      data => {
        setIsDarkModeEnabled(data);
      },
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  if (initializing) {
    return (
      <View>
        <LoderWithRipples />
      </View>
    );
  }
  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     backgroundColor: isDarkModeEnabled ? 'black' : 'white',
    //   }}>
    <ThemeContext.Provider value={isDarkModeEnabled ? theme.dark : theme.light}>
      {user ? (
        <AuthContext.Provider value={user}>
          <MyBottomTabNavigator />
        </AuthContext.Provider>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              onGoogleButtonPress()
                .then(() => console.log('Signed in with Google!'))
                .catch(error => console.log(error, 'srimaraj--'));
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              width: 200,
              backgroundColor: 'grey',
            }}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </ThemeContext.Provider>
    //</SafeAreaView>
  );
};

export default App;
