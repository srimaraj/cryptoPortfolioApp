// import React, {useState} from 'react';
// import {View, Text, TextInput, SafeAreaView, Button} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import {authFunctionSignUp} from './authHelper';

// const SignUpScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function authFunctionCall() {
//     authFunctionSignUp(email, password);
//   }

//   return (
//     <View>
//       <Text>This is signup page</Text>
//       <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
//       <TextInput
//         onChangeText={setPassword}
//         value={password}
//         secureTextEntry={true}
//         placeholder="password"
//       />
//       <Button onPress={authFunctionCall} title="SIGN UP" color="#841584" />
//     </View>
//   );
// };

// export default SignUpScreen;
