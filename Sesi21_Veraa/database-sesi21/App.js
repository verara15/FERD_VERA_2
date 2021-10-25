import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View} from 'react-native';
import Header from './Component/Header'
import Posts from './Component/Posts';

export default function App() {

  return (
    <View style={styles.container}>
      <Header/>
      <Posts/>
      <StatusBar style="auto"/>    
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  }
});
