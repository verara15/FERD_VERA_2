import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, createContext, useContext, } from 'react';
import { StyleSheet, Text, View ,Image, _ScrollView, ScrollView, Switch,TouchableHighlight} from 'react-native';
import Icons from 'react-native-vector-icons/Foundation';


const themes = {
  light:{
    foreground:"powderblue",
    background:"aliceblue"
  },
  dark:{
    foreground: "white",
    background: "black"
  },
};

const ThemeContext = createContext();

export default function App() {
  const [themee, setTheme] = useState(themes.light)
  const [isEnabled, setIsEnabled] = useState(false);
  const [data, setData] = useState({
    currFilter: "all",
    all:[],
    male:[],
    female:[]
  });
  const [currUser, setcurrUser] = useState([]);

  const theme = useContext(ThemeContext);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if (isEnabled === true){
      setTheme(themes.light)}
    else{
      setTheme(themes.dark)}
  }

  let datauser =async()=>{
    await fetch('https://randomuser.me/api/?results=20')
    .then((response) => response.json())
    .then((json) => {
      setData((prev) => ({
        ...prev,
        all: json.results,
        male: json.results.filter((user) => user.gender === "male"),
        female: json.results.filter((user) => user.gender === "female"),
      }));
      setcurrUser(json.results)
    })
  }

  useEffect(() => {
    datauser()
  }, []);
  

  const genderAll = () =>{
    setData((prev) => ({
      ...prev,
      currFilter: 'all',
    }));
    setcurrUser(data.all)
  }
  const genderFemale = () =>{
    setData((prev) => ({
      ...prev,
      currFilter: 'female',
    }));
    setcurrUser(data.female)
  }
  const genderMale = () =>{
    setData((prev) => ({
      ...prev,
      currFilter: 'male',
    }));
    setcurrUser(data.male)
  }

  return (
    <>
    <ThemeContext.Provider value={theme}>
      <View style={styles.header}>
        <View style={styles.customer}>
          <Text style={styles.title}>Customers</Text>  
        </View>
        <View style={styles.icon}>
          <TouchableHighlight onPress={genderAll} underlayColor="blue">
            <Icons style={styles.gender} name="torsos" size={30} color="white"/> 
          </TouchableHighlight>
          <TouchableHighlight onPress={genderFemale} underlayColor="blue">
            <Icons style={styles.gender} name="torso-female" size={30} color="white"/> 
          </TouchableHighlight>
          <TouchableHighlight onPress={genderMale} underlayColor="blue">
            <Icons style={styles.gender} name="torso" size={30} color="white"/> 
          </TouchableHighlight>           
        </View>
        <View style={styles.tema}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: themee.background,
        paddingTop:0,
        paddingLeft:10,
        paddingRight: 10,
        paddingBottom:10
      }}>
      <ScrollView style={styles.scroll}>
        {
          currUser.map((user, idx)=>(
          <View style={{
            backgroundColor: themee.foreground,
            flexDirection:'row',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            opacity: 0.8,
            marginBottom:5,
            marginTop:5
          }} 
          key ={idx}>
            <View style={styles.image}>
            <Image
              source={{uri: user.picture.thumbnail }} alt='react-native' style={styles.images}
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
    </ThemeContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  header:{
    marginTop:25,
    backgroundColor: "darkblue",
    flexDirection:'row',
  },
  title:{
    color:'white',
    fontWeight:"bold",
    fontSize: 27,
    padding:10,
  },
  customer:{
    flex:0.7,
  },
  tema:{
    flex:0.3,
    alignItems: "center",
    justifyContent: "center",
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
  },
  icon:{
    flex:0.3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
  },
  gender:{
    marginHorizontal:5
  }
});
