import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,Image, _ScrollView, ScrollView} from 'react-native';

export default function App() {

  const [data, setData] = useState([]);
  let datauser =async()=>{
    await fetch('https://randomuser.me/api/?results=20')
    .then((response) => response.json())
    .then((data) => setData(data.results));
  }
  useEffect(() => {
    datauser()
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Customers</Text>   
      </View> 
      <ScrollView style={styles.scroll}>
        
          {
            data.map((user, idx)=>(
            <View style={styles.list} key ={idx}>
              <View style={styles.image}>
              <Image
                 source={{uri:user.picture.thumbnail }} alt='react-native' style={styles.images}
              />
              </View>
              <View style={styles.desc}>
                <Text style={styles.nama}>{user.name.title} {user.name.first} {user.name.last}</Text>
                <Text>{user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.country}</Text>
                <Text style={styles.email}>{user.email}</Text>
              </View>
            </View>
            ))
          }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkseagreen',
    marginTop: 25,
    padding:10,
 
  },
  header:{
    height:45,
    backgroundColor:'darkseagreen',
  },
  title:{
    color:'white',
    fontWeight:"bold",
    fontSize: 27,
    padding:10
    
  },
  list:{
    backgroundColor:'white',
    flexDirection:'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    opacity: 0.7,
    marginBottom:5
  },
  image:{
    flex:0.3,
    margin:5
  },
  images:{
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    width:80,
    flex: 1,
    aspectRatio: 1 ,
  },
  desc:{
    flex:1,
    margin:5
  },
  nama:{
    fontWeight:"bold",
    fontSize: 17
  },
  email:{
    color:'deeppink'
  }
});
