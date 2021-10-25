import * as React from "react"
import { useState } from "react";
import { StyleSheet, Text, View ,Image, _ScrollView, ScrollView, BackHandler} from 'react-native';

export default function Header() {
    return(
        <View style={{
            backgroundColor:'#7C9473',
            padding: 10
        }}>
          <Text style={{
              fontSize: 30,
              color:'white',
              fontWeight:'bold'
          }}>Posts</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 25
    },
    scroll:{
        backgroundColor:'#C2B8A3',
        padding: 10
    },
    box:{
        backgroundColor:'#FEF7DC',
        marginBottom: 10,
        padding:10
    },
    title:{
        fontSize: 20,
        fontWeight:'bold'
    }
});