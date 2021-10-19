import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Page/Home'
import Profil from './Page/Profil'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createBottomTabNavigator();

const Router = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name= "Home" component={Home} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
                        ),
                }}/>
                <Stack.Screen name= "Profil" component={Profil}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-outline" color={color} size={size} />
                        ),
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;