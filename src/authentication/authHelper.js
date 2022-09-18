// import auth from '@react-native-firebase/auth';

// export function authFunctionSignUp(email, password) {
//   auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(userCred => {
//       if (userCred.user != null) {
//         userCred.user.sendEmailVerification();
//       }
//     })
//     .catch(error => {
//       if (error.code === 'auth/email-already-in-use') {
//         console.log('That email address is already in use!');
//       }

//       if (error.code === 'auth/invalid-email') {
//         console.log('That email address is invalid!');
//       }

//       console.error(error);
//     });
// }

// export function signOutFunction() {
//   auth()
//     .signOut()
//     .then(() => console.log('User signed out!'));
// }

// export function authFunctionSignIn(email, password) {
//   auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(() => {
//       console.log('Signed In');
//     })
//     .catch(error => {
//       if (error.code === 'auth/invalid-email') {
//         console.log('That email address is invalid!');
//       }
//       console.warn(error);
//     });
// }
