import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator()

import Register from "../pages/Register";
import Login from "../pages/Login";
import Tabs from "../Tabs";

export default function Routes() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name='Register'
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name='Tabs'
                    component={Tabs}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}