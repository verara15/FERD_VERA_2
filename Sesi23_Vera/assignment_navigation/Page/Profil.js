import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default function UserProfileView() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGonVYAfdGpIlgTznvYJfc0oCFl98EiN1Jw&usqp=CAU'}}/>

                <Text style={styles.name}>Vera</Text>            
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View >
                <Text style={styles.info}>Front End Developer Intern</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View >
                <Text style={styles.info}>Universitas Multimedia Nusantara</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View >
                <Text style={styles.info}>vera1@student.umn.ac.id</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View >
                <Text style={styles.info}>Parung Panjang, Bogor</Text>
              </View>
            </View>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "blue",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#00BFFF",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});