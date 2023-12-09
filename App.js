import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import CookieManager from '@react-native-cookies/cookies';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{
         uri: 'https://devfr.rendez-vous.be/app',
         // headers: {
         //    'HTTP_X_REQUESTED_WITH': 'be.rendezvous',
         //  },
      }}
      sharedCookiesEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: Constants.statusBarHeight,
   marginBottom: 10,
  },
});
