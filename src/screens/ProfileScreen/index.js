import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AuthContext from '../../../config/authContext';
import ThemeContext from '../../../config/themeContext';
import theme from '../../../config/themes';

const ProfileScreen = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  const user = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const textColor = theme.textColor1;

  return (
    <View style={styles.profileContainer}>
      <View style={styles.userDeatails}>
        <View style={styles.userDeatailsTextContainer}>
          <Text style={[styles.userDeatailsText, {color: textColor}]}>
            {user.displayName}
          </Text>
          <Text style={{color: textColor}}>{user.email}</Text>
        </View>
        <View style={styles.userProfileimageContainer}>
          <Image
            source={{uri: user.photoURL}}
            style={styles.userProfileImage}
          />
        </View>
      </View>
      <View style={styles.switchContainer}>
        <Text style={[styles.userDeatailsText, {color: textColor}]}>
          Enable Dark Mode
        </Text>
        <Switch
          value={!isDarkModeEnabled}
          onValueChange={() => {
            setIsDarkModeEnabled(!isDarkModeEnabled);
            EventRegister.emit('onChangeTheme', isDarkModeEnabled);
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() =>
          auth()
            .signOut()
            .then(() => {
              GoogleSignin.revokeAccess();
            })
        }
        style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  profileContainer: {
    height: '100%',
    marginHorizontal: 20,
  },
  logoutText: {color: 'red', fontWeight: 'bold'},
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 150,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  userDeatails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  userDeatailsTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  userDeatailsText: {fontWeight: 'bold'},
  userProfileImage: {width: 55, height: 55, borderRadius: 30},
  switchContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userProfileimageContainer: {
    width: 62,
    height: 62,
    borderRadius: 35,
    backgroundColor: '#E59E6D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
